import {UICorePlugin, Events, Browser, $} from 'clappr'
import './style.sass'
import blackSvgPixel from './black-svg-pixel'
import dummyMp4Video from './dummy-mp4-video'
import imaLoader from './ima-loader'
import playSvg from './play.svg'   // 01-play.svg icon from Clappr player
import loadSvg from './loader.svg' // http://articles.dappergentlemen.com/2015/01/13/svg-spinner/

export default class ClapprGoogleImaHtml5PrerollPlugin extends UICorePlugin {
  get name() { return 'google-ima-html5-preroll-plugin' }

  get attributes() {
    return {
      'class': this.name,
      'data-preroll': ''
    }
  }

  constructor(core) {
    super(core)

    this._imaIsloaded = false
    this._pluginIsReady = false

    this._tag = this.options.googleImaHtml5PrerollPlugin.tag
    this._autostart = this.options.googleImaHtml5PrerollPlugin.autostart === false ? false : true // Default is true

    // TODO: Add an option which is an array of plugin name to disable
    // TODO: Add an option which is a plain object of event function (Vast ad events)

    if (!this._tag) {
      this._pluginError('tag option is required')
    }

    // Ensure Google IMA SDK is loaded
    imaLoader(() => {
      this._imaIsloaded = true
      this._initImaSDK()
    }, true)
  }

  bindEvents() {
    this.listenTo(this.core.mediaControl, Events.MEDIACONTROL_CONTAINERCHANGED, this._onMediaControlContainerChanged)
    this.listenTo(this.core, Events.CORE_READY, this._onCoreReady)
  }

  _onMediaControlContainerChanged() {
    this.core.mediaControl.container.$el.append(this.el)
  }

  _pluginError(msg) {
    throw new Error(this.name + ': ' + msg)
  }

  _onCoreReady() {
    // Get current container. (To disable bindings during ad playback)
    this._container = this.core.getCurrentContainer()
    if (!this._container) {
      this._pluginError('failed to get Clappr current container')
    }

    // Get current playback. (To get playback element)
    this._playback = this.core.getCurrentPlayback()
    if (!this._playback) {
      this._pluginError('failed to get Clappr playback')
    }

    // Get poster plugin. (May interfere with media control)
    this._posterPlugin = this._container.getPlugin('poster')
    if (!this._posterPlugin) {
      this._pluginError('failed to get Clappr internal poster plugin')
    }

    // Get click-to-pause plugin. (May interfere with advert click handling)
    this._clickToPausePlugin = this._container.getPlugin('click_to_pause')
    if (!this._clickToPausePlugin) {
      this._pluginError('failed to get Clappr internal click-to-pause plugin')
    }

    this._contentElement = this._playback.el
    this._initPlugin()
  }

  _disableControls() {
    this.core.disableMediaControl()
    this._posterPlugin.disable()
    this._clickToPausePlugin.disable()
    // this._container.stopped() // Little trick to avoid spinner plugin display
    this._container.stopListening()
  }

  _enableControls() {
    this._container.bindEvents()
    this._clickToPausePlugin.enable()
    this._posterPlugin.enable()
    this.core.enableMediaControl()
    this.core.mediaControl.onLoadedMetadataOnVideoTag(); // Little trick to fix iOS fullscreen button display
  }

  _initPlugin() {
    // Ensure browser can play video content. (Avoid to display an ad with nothing after)
    if (this._playback.name === 'no_op') {
      this.destroy()

      return
    }

    // Ensure playback is using HTML5 video element (other playback not supported)
    if (this._playback.tagName !== 'video') {
      this.destroy()

      return
    }

    // Display overlay (with loader icon)
    this._$clickOverlay.show()

    // Disable Clappr during ad playback
    process.nextTick(() => this._disableControls())

    this._useDummyMp4Video = false
    this._useBlackSvgPixel = false

    let src = this._playback.el && this._playback.el.src
    if (!src || src.length === 0) {
      // Ensure video element has one source loaded (expected by most of ad SDK libraries)
      // This is required if loaded source is a .m3u8 handled by hls.js playback (src is empty)
      this._playback.el.src = dummyMp4Video
      this._useDummyMp4Video = true
    } else if (this._playback.name === 'html5_video' && !this._playback.el.hasAttribute('poster'))  {
      // Hide video source preview using a black 1 pixel video poster. (Smoother user experience on iOS/MacOSX)
      this._playback.el.poster = 'data:image/svg+xml,' + blackSvgPixel
      this._useBlackSvgPixel = true
    }

    // Note that some ad SDK may also change the video element styles without properly restoring state after ad playback.
    // A possible enhancement could be also to backup element styles and restore them after ad playback.

    this._pluginIsReady = true
    this._initImaSDK()
  }

  _createImaContainer() {
    this._destroyImaContainer()
    // IMA does not clean ad container when finished
    // For the sake of simplicity, wrap into a <div> element
    if (this._adContainer) {
      this._imaContainer = document.createElement('div')
      this._adContainer.appendChild(this._imaContainer)
    }
  }

  _destroyImaContainer() {
    if (this._imaContainer && this._adContainer) {
      this._adContainer.removeChild(this._imaContainer)
      delete this._imaContainer
    }
  }

  _createAdDisplayContainer() {
    this._createImaContainer()
    this._adDisplayContainer = new google.ima.AdDisplayContainer(this._imaContainer, this._contentElement)
  }

  _initImaSDK() {
    if (!this._imaIsloaded || !this._pluginIsReady) {
      return
    }

    this._createAdDisplayContainer()
    this._requestAd()
  }

  _requestAd() {
    let adsLoader = new google.ima.AdsLoader(this._adDisplayContainer)

    adsLoader.addEventListener(
      google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
      (e) => {
        this._onAdsManagerLoaded(e)
      }
    )

    adsLoader.addEventListener(
      google.ima.AdErrorEvent.Type.AD_ERROR,
      (e) => {
        this._onAdError(e)
      }
    )

    let adsRequest = new google.ima.AdsRequest()
    adsRequest.adTagUrl = this._tag
    adsRequest.linearAdSlotWidth = this._contentElement.offsetWidth
    adsRequest.linearAdSlotHeight = this._contentElement.offsetHeight
    adsRequest.nonLinearAdSlotWidth = this._contentElement.offsetWidth
    adsRequest.nonLinearAdSlotHeight = this._contentElement.offsetHeight

    // requestAds() trigger _onAdsManagerLoaded() or _onAdError()
    adsLoader.requestAds(adsRequest)
  }

  _onAdsManagerLoaded(adsManagerLoadedEvent) {
    let adsRenderingSettings = new google.ima.AdsRenderingSettings()

    // This could also set to false and ensure playback state is restored
    // Note also that Clappr destroy video src on stop and set src value on play
    adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true

    this._adsManager = adsManagerLoadedEvent.getAdsManager(this._contentElement, adsRenderingSettings)

    this._adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e) => {
      this._onAdError(e)
    })
    
    this._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, () => {
      console.log('AdEvent.CONTENT_RESUME_REQUESTED')
      this._playVideoContent()
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, () => {
      console.log('AdEvent.CONTENT_PAUSE_REQUESTED')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, () => {
      console.log('AdEvent.LOADED')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, () => {
      console.log('AdEvent.CLICK')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, () => {
      console.log('AdEvent.IMPRESSION')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, () => {
      console.log('AdEvent.STARTED')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, () => {
      console.log('AdEvent.FIRST_QUARTILE')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, () => {
      console.log('AdEvent.MIDPOINT')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, () => {
      console.log('AdEvent.THIRD_QUARTILE')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, () => {
      console.log('AdEvent.COMPLETE')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, () => {
      console.log('AdEvent.PAUSED')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, () => {
      console.log('AdEvent.RESUMED')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, () => {
      console.log('AdEvent.SKIPPED')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, () => {
      console.log('AdEvent.USER_CLOSE')
    })

    this._setupOverlay()
  }

  _onAdError(adErrorEvent) {
    // google.ima.AdErrorEvent : https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdErrorEvent
    // google.ima.AdError : https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdError
    console.log('onAdError: ' + adErrorEvent.getError())
    this._playVideoContent()
  }

  _setupOverlay() {
    // Ad start must be done as the result of a user action on mobile.
    // For more details, read https://developers.google.com/interactive-media-ads/docs/sdks/html5/mobile_video
    if (!this._autostart || Browser.isMobile) {
      let startAd = (e) => {
        try {
          this._clickOverlay.removeEventListener('click', startAd, false)
          e.preventDefault()
          e.stopPropagation()
        } catch (err) {}
        this._$clickOverlay.hide()
        this._playAds()
      }
      this._setPlayIcon()
      this._clickOverlay.addEventListener('click', startAd, false)

      return
    }

    // Otherwise, autostart ad display
    this._$clickOverlay.hide()
    this._playAds()
  }

  _playAds() {
    this._contentElement.load()
    this._adDisplayContainer.initialize()

    try {
      this._adsManager.init(this._contentElement.offsetWidth, this._contentElement.offsetHeight, google.ima.ViewMode.NORMAL)
      this._adsManager.start()
    } catch (e) {
      console.log('adsManager catched error', e)
      this._playVideoContent()
    }
  }

  _playVideoContent() {
    if (this._useBlackSvgPixel) {
      this._playback.$el.attr('poster', null)
    }

    if (this._useDummyMp4Video) {
      // Clappr HTML5 video playback stop() method remove the src element.
      this.core.mediaControl.stop()
    } else {
      // Trick to fix 'seek_time' plugin. https://github.com/kslimani/clappr-google-ima-html5-preroll/issues/1
      this._contentElement.load()
    }

    process.nextTick(() => {
      this._enableControls()
      this.$el.hide()
      this.core.mediaControl.play()
    })
  }

  _remove() {
    if (this._$adContainer) {
      this._$adContainer.remove()
    }
    if (this._$clickOverlay) {
      this._$clickOverlay.remove()
    }
  }

  render() {
    this._remove()
    this._$adContainer = $("<div />").addClass("preroll-container").attr('data-preroll', '')
    this._$clickOverlay = $("<div />").addClass("preroll-overlay").attr('data-preroll', '')
    this._$clickOverlay.append(loadSvg).find('svg path').css('fill', '#fff')
    this._$clickOverlay.find('svg').addClass('preroll-overlay-icon').attr('data-preroll', '')
    this.$el.append(this._$adContainer)
    this.$el.append(this._$clickOverlay)
    this._adContainer = this._$adContainer[0]
    this._clickOverlay = this._$clickOverlay[0]

    return this
  }

  _setPlayIcon() {
    this._$clickOverlay.find('svg').replaceWith(playSvg)
    this._$clickOverlay.find('svg path').css('fill', '#fff')
    this._$clickOverlay.find('svg').addClass('preroll-overlay-icon').attr('data-preroll', '')
  }

  destroy() {
    if (this._adsManager) {
      this._adsManager.destroy()
    }
    this._destroyImaContainer()
    super.destroy()
  }
}

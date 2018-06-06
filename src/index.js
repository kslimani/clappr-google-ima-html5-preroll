import {UICorePlugin, Mediator, Events, Browser, Styler, $} from 'clappr'
import pluginStyle from './style.sass'
import {svg, mp4} from './dummy'
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

  get cfg() {
    return this.options.googleImaHtml5PrerollPlugin || {}
  }

  constructor(core) {
    super(core)
    this._imaIsloading = false
    this._imaIsloaded = false
    this._imaLoadResult = false
    this._pluginIsReady = false
    this._controlsDisabled = false
    this._isLoadingContent = false
  }

  bindEvents() {
    this.listenTo(this.core.mediaControl, Events.MEDIACONTROL_CONTAINERCHANGED, this._onMediaControlContainerChanged)
    this.listenTo(this.core, Events.CORE_READY, this._onCoreReady)
    Mediator.on(`${this.core.options.playerId}:${Events.PLAYER_RESIZE}`, this._onPlayerResize, this)
  }

  _onMediaControlContainerChanged() {
    this.core.mediaControl.container.$el.append(this.el)
  }

  _onCoreReady() {
    // Since Clappr 0.2.84, "CORE_READY" event is trigerred after create container on load
    this._configure()
    this._loadImaSDK()
    this._initPlugin()
  }

  _onPlayerResize(evt) {
    // Signal player resize to ads manager
    this._adsManager && this._adsManager.resize(this._contentElement.offsetWidth, this._contentElement.offsetHeight, google.ima.ViewMode.NORMAL)
  }

  _pluginError(msg) {
    throw new Error(this.name + ': ' + msg)
  }

  _configure() {
    this._tag = this.cfg.tag || false
    this._autostart = this.cfg.autostart === false ? false : true // Default is true
    this._events = $.isPlainObject(this.cfg.events) ? this.cfg.events : {}
    this._vpaid = this.cfg.hasOwnProperty('vpaid') ? this.cfg.vpaid : 0 // Default VpaidMode is DISABLED
    this._nonLinearDuration = this.cfg.nonLinearDuration > 0 ? this.cfg.nonLinearDuration : 15000 // Default is 15 seconds
    this._imaLoadtimeout = this.cfg.imaLoadTimeout > 0 ? this.cfg.imaLoadTimeout : 6000 // Default is 6 seconds
    // TODO: Add an option which is an array of plugin name to disable
  }

  _loadImaSDK() {
    // Ensure is lazy loaded once (only if tag is filled)
    if (this._imaIsloading || this._imaIsloaded || !this._tag) return

    this._imaIsloading = true
    imaLoader((result) => {
      this._imaLoadResult = result
      this._imaIsloading = false
      this._imaIsloaded = true
      this._initImaSDK()
    }, true, this._imaLoadtimeout)
  }

  _disableControls() {
    this.core.disableMediaControl()
    this._posterPlugin && this._posterPlugin.disable()
    this._clickToPausePlugin && this._clickToPausePlugin.disable()
    this._container.stopListening()
    this._controlsDisabled = true
  }

  _enableControls() {
    if (this._controlsDisabled) {
      this._clickToPausePlugin && this._clickToPausePlugin.enable()
      this._posterPlugin && this._posterPlugin.enable()
      this.core.enableMediaControl()
      this._controlsDisabled = false
    }
  }

  _initPlugin() {
    this._pluginIsReady = false

    // Ensure not loading video content (after ad played)
    if (this._isLoadingContent) {
      this._isLoadingContent = false
      this.$el.hide()

      return
    }

    this._cleanup()

    // Get current playback. (To get playback element)
    this._playback = this.core.getCurrentPlayback()
    if (!this._playback) {
      this._pluginError('failed to get Clappr playback')
    }

    // Ensure plugin configuration has VAST tag
    if (!this._tag) return

    // Ensure playback is using HTML5 video element if mobile device
    if (this._playback.tagName !== 'video' && Browser.isMobile) return

    // Ensure browser can play video content. (Avoid to display an ad with nothing after)
    if (this._playback.name === 'no_op') return

    this.$el.show()
    this._$clickOverlay.show()

    // Get current container. (To disable bindings during ad playback)
    this._container = this.core.getCurrentContainer()
    if (!this._container) {
      this._pluginError('failed to get Clappr current container')
    }

    // Attempt to get poster plugin. (May interfere with media control)
    this._posterPlugin = this._container.getPlugin('poster')

    // Attempt to get click-to-pause plugin. (May interfere with advert click handling)
    this._clickToPausePlugin = this._container.getPlugin('click_to_pause')

    // Disable Clappr during ad playback
    process.nextTick(() => this._disableControls())

    // Attempt to get error screen plugin. (May interfere with dummy source switch)
    this._errorScreenPlugin = this.core.getPlugin('error_screen')

    // Disable error screen plugin (will be re-enabled when source reloaded)
    this._errorScreenPlugin && this._errorScreenPlugin.disable()

    this._contentElement = this._playback.el
    this._useDummyMp4Video = false
    this._useBlackSvgPixel = false

    let src = this._playback.el && this._playback.el.src
    if (!src || src.length === 0) {
      // Ensure video element has one source loaded (expected by most of ad SDK libraries)
      // This is required if loaded source is a .m3u8 handled by hls.js playback (src is empty)
      this._playback.el.src = mp4
      this._useDummyMp4Video = true
    } else if (this._playback.name === 'html5_video' && !this._playback.el.hasAttribute('poster'))  {
      // Hide video source preview using a black 1 pixel video poster. (Smoother user experience on iOS/MacOSX)
      this._playback.el.poster = svg
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
      this._imaContainer = $("<div />").addClass("ima-container").attr('data-preroll', '')[0]
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
    this._destroyAdDisplayContainer()
    this._adDisplayContainer = new google.ima.AdDisplayContainer(this._imaContainer, this._contentElement)
  }

  _destroyAdDisplayContainer() {
    if (this._adDisplayContainer) {
      this._adDisplayContainer.destroy()
      delete this._adDisplayContainer
    }
  }

  _vpaidMode() {
    // For more details, read https://developers.google.com/interactive-media-ads/docs/sdks/html5/vpaid2js#enabling
    if (this._vpaid === 0)
      return google.ima.ImaSdkSettings.VpaidMode.DISABLED

    if (this._vpaid > 1)
      return google.ima.ImaSdkSettings.VpaidMode.INSECURE

    return google.ima.ImaSdkSettings.VpaidMode.ENABLED
  }

  _initImaSDK() {
    if (!this._imaIsloaded || !this._pluginIsReady) {
      return
    }

    // Skip ad scenario if IMA SDK is not successfully loaded
    // May happen if user has ad blocker, or Google server unavailable
    if (!this._imaLoadResult) {
      this._playVideoContent()

      return
    }

    // Setup VPAID support
    google.ima.settings.setVpaidMode(this._vpaidMode());

    this._setupOverlay()
  }

  _destroyAdsLoader() {
    if (this._adsLoader) {
      this._adsLoader.contentComplete()
      this._adsLoader.destroy()
      delete this._adsLoader
    }
  }

  _requestAd() {
    // Destroy any previously created ads loader instance
    // IMA guidelines are to use the same AdsLoader instance for the entire
    // lifecycle of your page, but Clappr may create a new video element if
    // configure() method is called with a source.
    this._destroyAdsLoader()

    this._adsLoader = new google.ima.AdsLoader(this._adDisplayContainer)

    this._adsLoader.addEventListener(
      google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
      (e) => {
        this._onAdsManagerLoaded(e)
      }
    )

    this._adsLoader.addEventListener(
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

    // Assume playback is consented by user
    adsRequest.setAdWillAutoPlay(true);
    adsRequest.setAdWillPlayMuted(false);

    // requestAds() trigger _onAdsManagerLoaded() or _onAdError()
    this._adsLoader.requestAds(adsRequest)
  }

  _destroyAdsManager() {
    if (this._adsManager) {
      this._adsManager.destroy()
      delete this._adsManager
    }
  }

  _onAdsManagerLoaded(adsManagerLoadedEvent) {
    let adsRenderingSettings = new google.ima.AdsRenderingSettings()

    // Plugin will handle playback state when ad has completed
    adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = false

    // Destroy any previously created ads manager
    this._destroyAdsManager()

    this._adLoaded = false;

    this._adsManager = adsManagerLoadedEvent.getAdsManager(this._contentElement, adsRenderingSettings)

    this._adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e) => {
      this._onAdError(e)
    })
    
    this._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, () => {
      this._imaEvent('content_resume_requested')
      this._playVideoContent()
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, () => {
      this._imaEvent('content_pause_requested')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, () => {
      this._adLoaded = true;
      this._imaEvent('loaded')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, () => {
      this._imaEvent('click')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, () => {
      this._imaEvent('impression')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, (e) => {
      // Non-linear ad is displayed before content for duration
      // FIXME: find a way to display it while playing content
      if (! e.getAd().isLinear()) {
        setTimeout(() => {
          this._playVideoContent()
        }, this._nonLinearDuration)
      }

      this._imaEvent('started')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, () => {
      this._imaEvent('first_quartile')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, () => {
      this._imaEvent('midpoint')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, () => {
      this._imaEvent('third_quartile')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, () => {
      this._imaEvent('complete')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, () => {
      this._imaEvent('paused')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, () => {
      this._imaEvent('resumed')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, () => {
      this._imaEvent('skipped')
    })

    this._adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, () => {
      this._imaEvent('user_close')
    })

    this._playAds()
  }

  _onAdError(adErrorEvent) {
    // google.ima.AdErrorEvent : https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdErrorEvent
    // google.ima.AdError : https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdError
    // console.log('onAdError: ' + adErrorEvent.getError())
    this._imaEvent('ad_error', adErrorEvent)

    if (!this._adLoaded) {
      this._playVideoContent()
    }
  }

  _imaEvent(eventName, e) {
    $.isFunction(this._events[eventName]) && this._events[eventName](e)
  }

  _setupOverlay() {
    // Ad start must be done as the result of a user action on mobile.
    // For more details, read https://developers.google.com/interactive-media-ads/docs/sdks/html5/mobile_video
    if (!this._autostart) {
      let startAd = (e) => {
        try {
          this._clickOverlay.removeEventListener('click', startAd, false)
          e.preventDefault()
          e.stopPropagation()
        } catch (err) {}

        this._setOverlayIcon(loadSvg)

        // Use playback "consent" feature to capture user action (Clappr 0.2.66 or greater)
        this._playback.consent()

        // Request ad
        this._createAdDisplayContainer()
        this._adDisplayContainer.initialize() // Must be called on overlay click
        this._requestAd()
      }

      this._setOverlayIcon(playSvg)
      this._clickOverlay.addEventListener('click', startAd, false)

      return
    }

    // Otherwise, request ad
    this._setOverlayIcon(loadSvg)
    this._createAdDisplayContainer()
    this._adDisplayContainer.initialize()
    this._requestAd()
  }

  _playAds() {
    try {
      this._$clickOverlay.hide()
      this._adsManager.init(
        this._contentElement.offsetWidth,
        this._contentElement.offsetHeight,
        google.ima.ViewMode.NORMAL
      )
      this._adsManager.start()
    } catch (e) {
      // console.log('adsManager catched error', e)
      this._imaEvent('error', e)
      this._playVideoContent()
    }
  }

  _playVideoContent() {
    process.nextTick(() => {
      this._enableControls()
      this.$el.hide()

      // Ensure recycleVideo playback option is enabled with mobile devices (Clappr 0.2.66 or greater)
      let playbackOptions = this.core.options.playback || {}
      playbackOptions.recycleVideo = Browser.isMobile

      // Signal loading video content
      this._isLoadingContent = true

      setTimeout(() => {
        this.core.configure({
          playback: playbackOptions,
          sources: this.core.options.sources,
          autoPlay: true, // Assume playback has user consent
        })
      }, 100)
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
    this.$el.append(this._$adContainer)
    this.$el.append(this._$clickOverlay)
    this.$el.append(Styler.getStyleFor(pluginStyle))
    this._adContainer = this._$adContainer[0]
    this._clickOverlay = this._$clickOverlay[0]

    return this
  }

  _setOverlayIcon(icon) {
    let svg = this._$clickOverlay.find('svg')
    if (svg[0]) {
      this._$clickOverlay.find('svg').replaceWith(icon)
    } else {
      this._$clickOverlay.append(icon)
    }
    this._$clickOverlay.find('svg path').css('fill', '#fff')
    this._$clickOverlay.find('svg').addClass('preroll-overlay-icon').attr('data-preroll', '')
  }

  _cleanup() {
    this._destroyAdsLoader()
    this._destroyAdDisplayContainer()
    this._destroyAdsManager()
    this._destroyImaContainer()
    this.$el.hide()
  }

  destroy() {
    this._cleanup()
    super.destroy()
  }
}

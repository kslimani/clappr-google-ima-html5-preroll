(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["clappr"], factory);
	else if(typeof exports === 'object')
		exports["ClapprGoogleImaHtml5PrerollPlugin"] = factory(require("clappr"));
	else
		root["ClapprGoogleImaHtml5PrerollPlugin"] = factory(root["Clappr"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _clappr = __webpack_require__(2);

var _style = _interopRequireDefault(__webpack_require__(3));

var _dummy = __webpack_require__(5);

var _imaLoader = _interopRequireDefault(__webpack_require__(6));

var _play = _interopRequireDefault(__webpack_require__(7));

var _loader = _interopRequireDefault(__webpack_require__(8));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// http://articles.dappergentlemen.com/2015/01/13/svg-spinner/
var ClapprGoogleImaHtml5PrerollPlugin = /*#__PURE__*/function (_UICorePlugin) {
  _inherits(ClapprGoogleImaHtml5PrerollPlugin, _UICorePlugin);

  _createClass(ClapprGoogleImaHtml5PrerollPlugin, [{
    key: "name",
    get: function get() {
      return 'google-ima-html5-preroll-plugin';
    }
  }, {
    key: "attributes",
    get: function get() {
      return {
        'class': this.name,
        'data-preroll': ''
      };
    }
  }, {
    key: "cfg",
    get: function get() {
      return this.options.googleImaHtml5PrerollPlugin || {};
    }
  }]);

  function ClapprGoogleImaHtml5PrerollPlugin(core) {
    var _this;

    _classCallCheck(this, ClapprGoogleImaHtml5PrerollPlugin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ClapprGoogleImaHtml5PrerollPlugin).call(this, core));
    _this._imaIsloading = false;
    _this._imaIsloaded = false;
    _this._imaLoadResult = false;
    _this._pluginIsReady = false;
    _this._controlsDisabled = false;
    _this._isLoadingContent = false;
    return _this;
  }

  _createClass(ClapprGoogleImaHtml5PrerollPlugin, [{
    key: "bindEvents",
    value: function bindEvents() {
      if (_clappr.Events.CORE_ACTIVE_CONTAINER_CHANGED) {
        // Clappr 0.3.0 or greater
        this.listenTo(this.core, _clappr.Events.CORE_ACTIVE_CONTAINER_CHANGED, this._onMediaControlContainerChanged);
      } else {
        this.listenTo(this.core.mediaControl, _clappr.Events.MEDIACONTROL_CONTAINERCHANGED, this._onMediaControlContainerChanged);
      }

      this.listenTo(this.core, _clappr.Events.CORE_READY, this._onCoreReady);

      _clappr.Mediator.on("".concat(this.core.options.playerId, ":").concat(_clappr.Events.PLAYER_RESIZE), this._onPlayerResize, this);
    }
  }, {
    key: "_onMediaControlContainerChanged",
    value: function _onMediaControlContainerChanged() {
      if (this.core.activeContainer) {
        // Clappr 0.3.0 or greater
        this.core.activeContainer.$el.append(this.el);
      } else {
        this.core.mediaControl.container.$el.append(this.el);
      }
    }
  }, {
    key: "_onCoreReady",
    value: function _onCoreReady() {
      // Since Clappr 0.2.84, "CORE_READY" event is trigerred after create container on load
      this._resetMaxDurationTimer();

      this._resetNonLinearTimer();

      this._resetPlugin();

      this._configure();

      this._loadImaSDK();

      this._initPlugin();
    }
  }, {
    key: "_onPlayerResize",
    value: function _onPlayerResize(evt) {
      // Signal player resize to ads manager
      this._adsManager && this._adsManager.resize(this._contentElement.offsetWidth, this._contentElement.offsetHeight, google.ima.ViewMode.NORMAL);
    }
  }, {
    key: "_pluginError",
    value: function _pluginError(msg) {
      var e = new Error(this.name + ': ' + msg);

      this._imaEvent('error', e);

      throw e;
    }
  }, {
    key: "_configure",
    value: function _configure() {
      this._tag = this.cfg.tag || false;
      this._autostart = this.cfg.autostart === false ? false : true; // Default is true

      this._events = _clappr.$.isPlainObject(this.cfg.events) ? this.cfg.events : {};
      this._vpaid = this.cfg.hasOwnProperty('vpaid') ? this.cfg.vpaid : 0; // Default VpaidMode is DISABLED

      this._nonLinearDuration = this.cfg.nonLinearDuration > 0 ? this.cfg.nonLinearDuration : 15000; // Default is 15 seconds

      this._imaLoadtimeout = this.cfg.imaLoadTimeout > 0 ? this.cfg.imaLoadTimeout : 6000; // Default is 6 seconds

      this._usePosterIcon = !!this.cfg.usePosterIcon;
      this._maxDuration = this.cfg.maxDuration > 0 ? this.cfg.maxDuration : false; // Default is disabled

      this._locale = this.cfg.locale ? this.cfg.locale : false; // Default is to not set custom locale

      this._disableLoader = this.cfg.disableLoader ? this.cfg.disableLoader : false; // Default is false (Loader is enabled)
      // TODO: Add an option which is an array of plugin name to disable
    }
  }, {
    key: "_resetPlugin",
    value: function _resetPlugin() {
      this._playVideoContentRequested = false;
    }
  }, {
    key: "_loadImaSDK",
    value: function _loadImaSDK() {
      var _this2 = this;

      // Ensure is lazy loaded once (only if tag is filled)
      if (this._imaIsloading || this._imaIsloaded || !this._tag) return;
      this._imaIsloading = true;
      (0, _imaLoader["default"])(function (result) {
        _this2._imaLoadResult = result;
        _this2._imaIsloading = false;
        _this2._imaIsloaded = true;

        _this2._initImaSDK();
      }, true, this._imaLoadtimeout);
    }
  }, {
    key: "_disableControls",
    value: function _disableControls() {
      if (this.core.disableMediaControl) {
        this.core.disableMediaControl();
      } else {
        // Clappr 0.3.0 or greater
        var mediaControl = this.core.getPlugin('media_control');
        mediaControl && mediaControl.disable();
      }

      this._posterPlugin && this._posterPlugin.disable();
      this._clickToPausePlugin && this._clickToPausePlugin.disable();

      this._container.stopListening();

      this._controlsDisabled = true;
    }
  }, {
    key: "_enableControls",
    value: function _enableControls() {
      if (this._controlsDisabled) {
        this._clickToPausePlugin && this._clickToPausePlugin.enable();
        this._posterPlugin && this._posterPlugin.enable();

        if (this.core.enableMediaControl) {
          this.core.enableMediaControl();
        } else {
          // Clappr 0.3.0 or greater
          var mediaControl = this.core.getPlugin('media_control');
          mediaControl && mediaControl.enable();
        }

        this._controlsDisabled = false;
      }
    }
  }, {
    key: "_initPlugin",
    value: function _initPlugin() {
      var _this3 = this;

      this._pluginIsReady = false; // Ensure not loading video content (after ad played)

      if (this._isLoadingContent) {
        this._isLoadingContent = false;
        this.$el.hide();
        return;
      }

      this._cleanup(); // Get current playback. (To get playback element)


      if (this.core.activePlayback) {
        // Clappr 0.3.0 or greater
        this._playback = this.core.activePlayback;
      } else {
        this._playback = this.core.getCurrentPlayback();
      }

      if (!this._playback) {
        this._pluginError('failed to get Clappr playback');
      } // Get current container. (To disable bindings during ad playback)


      if (this.core.activeContainer) {
        // Clappr 0.3.0 or greater
        this._container = this.core.activeContainer;
      } else {
        this._container = this.core.getCurrentContainer();
      }

      if (!this._container) {
        this._pluginError('failed to get Clappr current container');
      } // Ensure plugin configuration has VAST tag


      if (!this._tag) {
        // Handle content autoplay if no tag
        if (!this.options.autoPlay && this._autostart) {
          this._container.play();
        }

        return;
      } // Ensure playback is using HTML5 video element if mobile device


      if (this._playback.tagName !== 'video' && _clappr.Browser.isMobile) return; // Ensure browser can play video content. (Avoid to display an ad with nothing after)

      if (this._playback.name === 'no_op') return;
      this.$el.show();

      this._$clickOverlay.show(); // Attempt to get poster plugin. (May interfere with media control)


      this._posterPlugin = this._container.getPlugin('poster'); // Attempt to capture poster play svg icon

      if (this._posterPlugin && this._usePosterIcon) {
        var _svg = this._posterPlugin.$el.find('svg');

        if (_svg[0]) {
          this._playSvg = _svg[0];
        }
      } // Attempt to get click-to-pause plugin. (May interfere with advert click handling)


      this._clickToPausePlugin = this._container.getPlugin('click_to_pause'); // Disable Clappr during ad playback

      process.nextTick(function () {
        return _this3._disableControls();
      }); // Attempt to get error screen plugin. (May interfere with dummy source switch)

      this._errorScreenPlugin = this.core.getPlugin('error_screen'); // Disable error screen plugin (will be re-enabled when source reloaded)

      this._errorScreenPlugin && this._errorScreenPlugin.disable();
      this._contentElement = this._playback.el;
      this._useDummyMp4Video = false;
      this._useBlackSvgPixel = false;
      var src = this._playback.el && this._playback.el.src;

      if (!src || src.length === 0) {
        // Ensure video element has one source loaded (expected by most of ad SDK libraries)
        // This is required if loaded source is a .m3u8 handled by hls.js playback (src is empty)
        this._playback.el.src = _dummy.mp4;
        this._useDummyMp4Video = true;
      } else if (this._playback.name === 'html5_video' && !this._playback.el.hasAttribute('poster')) {
        // Hide video source preview using a black 1 pixel video poster. (Smoother user experience on iOS/MacOSX)
        this._playback.el.poster = _dummy.svg;
        this._useBlackSvgPixel = true;
      } // Note that some ad SDK may also change the video element styles without properly restoring state after ad playback.
      // A possible enhancement could be also to backup element styles and restore them after ad playback.


      this._pluginIsReady = true;

      this._initImaSDK();
    }
  }, {
    key: "_createImaContainer",
    value: function _createImaContainer() {
      this._destroyImaContainer(); // IMA does not clean ad container when finished
      // For the sake of simplicity, wrap into a <div> element


      if (this._adContainer) {
        this._imaContainer = (0, _clappr.$)("<div />").addClass("ima-container").attr('data-preroll', '')[0];

        this._adContainer.appendChild(this._imaContainer);
      }
    }
  }, {
    key: "_destroyImaContainer",
    value: function _destroyImaContainer() {
      if (this._imaContainer && this._adContainer) {
        this._adContainer.removeChild(this._imaContainer);

        delete this._imaContainer;
      }
    }
  }, {
    key: "_createAdDisplayContainer",
    value: function _createAdDisplayContainer() {
      this._createImaContainer();

      this._destroyAdDisplayContainer();

      this._adDisplayContainer = new google.ima.AdDisplayContainer(this._imaContainer, this._contentElement);
    }
  }, {
    key: "_destroyAdDisplayContainer",
    value: function _destroyAdDisplayContainer() {
      if (this._adDisplayContainer) {
        this._adDisplayContainer.destroy();

        delete this._adDisplayContainer;
      }
    }
  }, {
    key: "_vpaidMode",
    value: function _vpaidMode() {
      // For more details, read https://developers.google.com/interactive-media-ads/docs/sdks/html5/vpaid2js#enabling
      if (this._vpaid === 0) return google.ima.ImaSdkSettings.VpaidMode.DISABLED;
      if (this._vpaid > 1) return google.ima.ImaSdkSettings.VpaidMode.INSECURE;
      return google.ima.ImaSdkSettings.VpaidMode.ENABLED;
    }
  }, {
    key: "_initImaSDK",
    value: function _initImaSDK() {
      if (!this._imaIsloaded || !this._pluginIsReady) {
        return;
      } // Skip ad scenario if IMA SDK is not successfully loaded
      // May happen if user has ad blocker, or Google server unavailable


      if (!this._imaLoadResult) {
        this._imaEvent('error', new Error('Failed to load IMA SDK'));

        this._playVideoContent();

        return;
      } // Setup VPAID support


      google.ima.settings.setVpaidMode(this._vpaidMode()); // Setup provided locale

      this._locale && google.ima.settings.setLocale(this._locale); // Signal that IMA SDK is loaded

      this._imaEvent('ima_loaded', {
        target: this,
        ima: google.ima
      });

      this._setupOverlay();
    }
  }, {
    key: "_destroyAdsLoader",
    value: function _destroyAdsLoader() {
      if (this._adsLoader) {
        this._adsLoader.contentComplete();

        this._adsLoader.destroy();

        delete this._adsLoader;
      }
    }
  }, {
    key: "_requestAd",
    value: function _requestAd() {
      var _this4 = this;

      // Destroy any previously created ads loader instance
      // IMA guidelines are to use the same AdsLoader instance for the entire
      // lifecycle of your page, but Clappr may create a new video element if
      // configure() method is called with a source.
      this._destroyAdsLoader();

      this._adsLoader = new google.ima.AdsLoader(this._adDisplayContainer);

      this._adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (e) {
        _this4._onAdsManagerLoaded(e);
      });

      this._adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
        _this4._onAdError(e);
      });

      var adsRequest = new google.ima.AdsRequest();
      adsRequest.adTagUrl = this._tag;
      adsRequest.linearAdSlotWidth = this._contentElement.offsetWidth;
      adsRequest.linearAdSlotHeight = this._contentElement.offsetHeight;
      adsRequest.nonLinearAdSlotWidth = this._contentElement.offsetWidth;
      adsRequest.nonLinearAdSlotHeight = this._contentElement.offsetHeight; // Assume playback is consented by user

      adsRequest.setAdWillAutoPlay(true);
      adsRequest.setAdWillPlayMuted(false); // requestAds() trigger _onAdsManagerLoaded() or _onAdError()

      this._adsLoader.requestAds(adsRequest);
    }
  }, {
    key: "_destroyAdsManager",
    value: function _destroyAdsManager() {
      if (this._adsManager) {
        this._adsManager.destroy();

        delete this._adsManager;
      }
    }
  }, {
    key: "_onAdsManagerLoaded",
    value: function _onAdsManagerLoaded(adsManagerLoadedEvent) {
      var _this5 = this;

      var adsRenderingSettings = new google.ima.AdsRenderingSettings(); // Plugin will handle playback state when ad has completed

      adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = false; // Destroy any previously created ads manager

      this._destroyAdsManager();

      this._adsManager = adsManagerLoadedEvent.getAdsManager(this._contentElement, adsRenderingSettings);

      this._adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
        _this5._onAdError(e);
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, function () {
        _this5._imaEvent('content_resume_requested');

        _this5._playVideoContent();
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, function () {
        _this5._imaEvent('content_pause_requested');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, function () {
        _this5._imaEvent('loaded');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, function () {
        _this5._imaEvent('click');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, function () {
        _this5._imaEvent('impression');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, function (e) {
        if (!e.getAd().isLinear()) {
          // KNOWN ISSUE: non-linear ad is displayed *before* content for custom duration
          // FIXME: find a way to display it while playing content
          _this5._startNonLinearDurationTimer();
        } else {
          _this5._maxDuration && _this5._startMaxDurationTimer();
        }

        _this5._imaEvent('started');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, function () {
        _this5._imaEvent('first_quartile');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, function () {
        _this5._imaEvent('midpoint');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, function () {
        _this5._imaEvent('third_quartile');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, function () {
        _this5._imaEvent('complete');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, function () {
        _this5._imaEvent('paused');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, function () {
        _this5._imaEvent('resumed');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, function () {
        _this5._imaEvent('skipped');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, function () {
        _this5._imaEvent('user_close');
      });

      this._playAds();
    }
  }, {
    key: "_onAdError",
    value: function _onAdError(adErrorEvent) {
      // google.ima.AdErrorEvent : https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdErrorEvent
      // google.ima.AdError : https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdError
      // console.log('onAdError: ' + adErrorEvent.getError())
      this._imaEvent('ad_error', adErrorEvent);

      this._playVideoContent();
    }
  }, {
    key: "_onDurationTimeout",
    value: function _onDurationTimeout() {
      this._imaEvent('error', new Error("Maximum duration of ".concat(this._maxDuration, " ms reached")));

      if (this._adsManager) {
        // Signal ads manager to stop and get back to content
        this._adsManager.stop();
      } else {
        // Should never happen
        this._cleanup();

        this._playVideoContent();
      }
    }
  }, {
    key: "_startMaxDurationTimer",
    value: function _startMaxDurationTimer() {
      var _this6 = this;

      this._maxDurationTimer = setTimeout(function () {
        _this6._onDurationTimeout();
      }, this._maxDuration);
    }
  }, {
    key: "_resetMaxDurationTimer",
    value: function _resetMaxDurationTimer() {
      if (typeof this._maxDurationTimer === 'number') {
        clearTimeout(this._maxDurationTimer);
        this._maxDurationTimer = undefined;
      }
    }
  }, {
    key: "_startNonLinearDurationTimer",
    value: function _startNonLinearDurationTimer() {
      var _this7 = this;

      this._nonLinearTimer = setTimeout(function () {
        _this7._playVideoContent();
      }, this._nonLinearDuration);
    }
  }, {
    key: "_resetNonLinearTimer",
    value: function _resetNonLinearTimer() {
      if (typeof this._nonLinearTimer === 'number') {
        clearTimeout(this._nonLinearTimer);
        this._nonLinearTimer = undefined;
      }
    }
  }, {
    key: "_imaEvent",
    value: function _imaEvent(eventName, e) {
      _clappr.$.isFunction(this._events[eventName]) && this._events[eventName](e);
    }
  }, {
    key: "_setupOverlay",
    value: function _setupOverlay() {
      var _this8 = this;

      // Ad start must be done as the result of a user action on mobile.
      // For more details, read https://developers.google.com/interactive-media-ads/docs/sdks/html5/mobile_video
      if (!this._autostart) {
        var startAd = function startAd(e) {
          try {
            _this8._clickOverlay.removeEventListener('click', startAd, false);

            e.preventDefault();
            e.stopPropagation();
          } catch (err) {}

          _this8._disableLoader || _this8._setOverlayIcon(_loader["default"]); // Use playback "consent" feature to capture user action (Clappr 0.2.66 or greater)

          _this8._playback.consent(); // Request ad


          _this8._createAdDisplayContainer();

          _this8._adDisplayContainer.initialize(); // Must be called on overlay click


          _this8._requestAd();
        };

        this._setOverlayIcon(this._playSvg || _play["default"]);

        this._clickOverlay.addEventListener('click', startAd, false);

        return;
      } // Otherwise, request ad


      this._disableLoader || this._setOverlayIcon(_loader["default"]);

      this._createAdDisplayContainer();

      this._adDisplayContainer.initialize();

      this._requestAd();
    }
  }, {
    key: "_playAds",
    value: function _playAds() {
      try {
        this._$clickOverlay.hide();

        this._adsManager.init(this._contentElement.offsetWidth, this._contentElement.offsetHeight, google.ima.ViewMode.NORMAL);

        this._adsManager.start();
      } catch (e) {
        // console.log('adsManager catched error', e)
        this._imaEvent('error', e);

        this._playVideoContent();
      }
    }
  }, {
    key: "_playVideoContent",
    value: function _playVideoContent() {
      var _this9 = this;

      // Ensure video content playback is not already requested
      // This may happen with VPAID unexpected AdError
      if (this._playVideoContentRequested) return;
      this._playVideoContentRequested = true;

      this._resetMaxDurationTimer();

      this._resetNonLinearTimer();

      this._imaEvent('content_resume');

      process.nextTick(function () {
        _this9._enableControls();

        _this9.$el.hide(); // Ensure recycleVideo playback option is enabled with mobile devices (Clappr 0.2.66 or greater)


        var playbackOptions = _this9.core.options.playback || {};
        playbackOptions.recycleVideo = _clappr.Browser.isMobile; // Signal loading video content

        _this9._isLoadingContent = true;
        setTimeout(function () {
          _this9.core.configure({
            playback: playbackOptions,
            sources: _this9.core.options.sources,
            autoPlay: true // Assume playback has user consent

          });
        }, 100);
      });
    }
  }, {
    key: "_remove",
    value: function _remove() {
      if (this._$adContainer) {
        this._$adContainer.remove();
      }

      if (this._$clickOverlay) {
        this._$clickOverlay.remove();
      }
    }
  }, {
    key: "render",
    value: function render() {
      this._remove();

      this._$adContainer = (0, _clappr.$)("<div />").addClass("preroll-container").attr('data-preroll', '');
      this._$clickOverlay = (0, _clappr.$)("<div />").addClass("preroll-overlay").attr('data-preroll', '');
      this.$el.append(this._$adContainer);
      this.$el.append(this._$clickOverlay);
      this.$el.append(_clappr.Styler.getStyleFor(_style["default"]));
      this._adContainer = this._$adContainer[0];
      this._clickOverlay = this._$clickOverlay[0];
      return this;
    }
  }, {
    key: "_setOverlayIcon",
    value: function _setOverlayIcon(icon) {
      var svg = this._$clickOverlay.find('svg');

      if (svg[0]) {
        this._$clickOverlay.find('svg').replaceWith(icon);
      } else {
        this._$clickOverlay.append(icon);
      }

      this._$clickOverlay.find('svg path').css('fill', '#fff');

      this._$clickOverlay.find('svg').addClass('preroll-overlay-icon').attr('data-preroll', '');
    }
  }, {
    key: "_cleanup",
    value: function _cleanup() {
      this._destroyAdsLoader();

      this._destroyAdDisplayContainer();

      this._destroyAdsManager();

      this._destroyImaContainer();

      this.$el.hide();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._cleanup();

      _get(_getPrototypeOf(ClapprGoogleImaHtml5PrerollPlugin.prototype), "destroy", this).call(this);
    }
  }]);

  return ClapprGoogleImaHtml5PrerollPlugin;
}(_clappr.UICorePlugin);

exports["default"] = ClapprGoogleImaHtml5PrerollPlugin;
module.exports = exports.default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".google-ima-html5-preroll-plugin[data-preroll]{position:absolute;top:0;left:0;width:100%;height:100%;text-align:left}.google-ima-html5-preroll-plugin[data-preroll] .preroll-container[data-preroll]{position:absolute;top:0;left:0;width:100%;height:100%}.google-ima-html5-preroll-plugin[data-preroll] .preroll-container[data-preroll] .ima-container[data-preroll]{position:absolute;top:0;left:0;width:100%;height:100%}.google-ima-html5-preroll-plugin[data-preroll] .preroll-overlay[data-preroll]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1337;cursor:pointer;overflow:hidden;display:none}.google-ima-html5-preroll-plugin[data-preroll] .preroll-overlay[data-preroll]:hover .preroll-overlay-icon[data-preroll]{opacity:1}.google-ima-html5-preroll-plugin[data-preroll] .preroll-overlay[data-preroll] .preroll-overlay-icon[data-preroll]{position:relative;width:100%;height:25%;top:50%;transform:translateY(-50%);opacity:0.75}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svg = exports.mp4 = void 0;
// source: https://github.com/mathiasbynens/small
var mp4 = 'data:video/mp4;base64, AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAGm1kYXQAAAGzABAHAAABthBgUYI9t+8AAAMNbW9vdgAAAGxtdmhkAAAAAMXMvvrFzL76AAAD6AAAACoAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABhpb2RzAAAAABCAgIAHAE/////+/wAAAiF0cmFrAAAAXHRraGQAAAAPxcy++sXMvvoAAAABAAAAAAAAACoAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAgAAAAIAAAAAAG9bWRpYQAAACBtZGhkAAAAAMXMvvrFzL76AAAAGAAAAAEVxwAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAABaG1pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAShzdGJsAAAAxHN0c2QAAAAAAAAAAQAAALRtcDR2AAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAgACABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAAXmVzZHMAAAAAA4CAgE0AAQAEgICAPyARAAAAAAMNQAAAAAAFgICALQAAAbABAAABtYkTAAABAAAAASAAxI2IAMUARAEUQwAAAbJMYXZjNTMuMzUuMAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAAABAAAAAQAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAASAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1My4yMS4x'; // 1x1 black SVG pixel

exports.mp4 = mp4;
var svg = 'data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" width="1" height="1" viewBox="0 0 1 1"><rect x="0" y="0" width="1" height="1" fill="#000000" /></svg>';
exports.svg = svg;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

/**
 * Google IMA HTML5 SDK lazy loader.
 * @function
 * @param {function} The library loaded callback.
 * @param {boolean} Set to true to force HTTPS load protocol. (Default behaviour is to match current protocol)
 * @param {number} The load timeout in milliseconds
 */
function _default(cb, secure, timeout) {
  var win = window,
      doc = document,
      el = 'script',
      timer = null;

  var onLoad = function onLoad(r) {
    win.clearTimeout(timer);
    if (typeof cb === 'function') cb(r);
  };

  if (win.google && win.google.ima) {
    onLoad(true);
    return;
  }

  var s = secure === true ? 'https:' : '';
  var first = doc.getElementsByTagName(el)[0];
  var script = doc.createElement(el);
  script.src = s + '//imasdk.googleapis.com/js/sdkloader/ima3.js';
  script.async = true;
  if (typeof cb === 'function') script.onload = function () {
    onLoad(true);
  };
  first.parentNode.insertBefore(script, first);

  if (timeout) {
    timer = win.setTimeout(function () {
      onLoad(false);
    }, timeout);
  }
}

module.exports = exports.default;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path fill=\"#010101\" d=\"M1.425.35L14.575 8l-13.15 7.65V.35z\"></path></svg>"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"svg-spinner\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 80 80\" xml:space=\"preserve\"><path id=\"spinner\" fill=\"#D43B11\" d=\"M40,72C22.4,72,8,57.6,8,40C8,22.4, 22.4,8,40,8c17.6,0,32,14.4,32,32c0,1.1-0.9,2-2,2 s-2-0.9-2-2c0-15.4-12.6-28-28-28S12,24.6,12,40s12.6, 28,28,28c1.1,0,2,0.9,2,2S41.1,72,40,72z\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 40 40\" to=\"360 40 40\" dur=\"0.6s\" repeatCount=\"indefinite\"></animateTransform></path></svg>"

/***/ })
/******/ ]);
});
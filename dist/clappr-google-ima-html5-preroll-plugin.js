(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["clappr"], factory);
	else if(typeof exports === 'object')
		exports["ClapprGoogleImaHtml5PrerollPlugin"] = factory(require("clappr"));
	else
		root["ClapprGoogleImaHtml5PrerollPlugin"] = factory(root["Clappr"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _clappr = __webpack_require__(2);

	__webpack_require__(3);

	var _blackSvgPixel = __webpack_require__(7);

	var _blackSvgPixel2 = _interopRequireDefault(_blackSvgPixel);

	var _dummyMp4Video = __webpack_require__(8);

	var _dummyMp4Video2 = _interopRequireDefault(_dummyMp4Video);

	var _imaLoader = __webpack_require__(9);

	var _imaLoader2 = _interopRequireDefault(_imaLoader);

	var _play = __webpack_require__(10);

	var _play2 = _interopRequireDefault(_play);

	var _loader = __webpack_require__(11);

	var _loader2 = _interopRequireDefault(_loader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 01-play.svg icon from Clappr player


	// http://articles.dappergentlemen.com/2015/01/13/svg-spinner/

	var ClapprGoogleImaHtml5PrerollPlugin = function (_UICorePlugin) {
	  _inherits(ClapprGoogleImaHtml5PrerollPlugin, _UICorePlugin);

	  _createClass(ClapprGoogleImaHtml5PrerollPlugin, [{
	    key: 'name',
	    get: function get() {
	      return 'google-ima-html5-preroll-plugin';
	    }
	  }, {
	    key: 'attributes',
	    get: function get() {
	      return {
	        'class': this.name,
	        'data-preroll': ''
	      };
	    }
	  }]);

	  function ClapprGoogleImaHtml5PrerollPlugin(core) {
	    _classCallCheck(this, ClapprGoogleImaHtml5PrerollPlugin);

	    var _this = _possibleConstructorReturn(this, (ClapprGoogleImaHtml5PrerollPlugin.__proto__ || Object.getPrototypeOf(ClapprGoogleImaHtml5PrerollPlugin)).call(this, core));

	    _this._imaIsloaded = false;
	    _this._pluginIsReady = false;

	    _this._tag = _this.options.googleImaHtml5PrerollPlugin.tag;
	    _this._autostart = _this.options.googleImaHtml5PrerollPlugin.autostart === false ? false : true; // Default is true

	    // TODO: Add an option which is an array of plugin name to disable
	    // TODO: Add an option which is a plain object of event function (Vast ad events)

	    if (!_this._tag) {
	      _this._pluginError('tag option is required');
	    }

	    // Ensure Google IMA SDK is loaded
	    (0, _imaLoader2.default)(function () {
	      _this._imaIsloaded = true;
	      _this._initImaSDK();
	    }, true);
	    return _this;
	  }

	  _createClass(ClapprGoogleImaHtml5PrerollPlugin, [{
	    key: 'bindEvents',
	    value: function bindEvents() {
	      this.listenTo(this.core.mediaControl, _clappr.Events.MEDIACONTROL_CONTAINERCHANGED, this._onMediaControlContainerChanged);
	      this.listenTo(this.core, _clappr.Events.CORE_READY, this._onCoreReady);
	    }
	  }, {
	    key: '_onMediaControlContainerChanged',
	    value: function _onMediaControlContainerChanged() {
	      this.core.mediaControl.container.$el.append(this.el);
	    }
	  }, {
	    key: '_pluginError',
	    value: function _pluginError(msg) {
	      throw new Error(this.name + ': ' + msg);
	    }
	  }, {
	    key: '_onCoreReady',
	    value: function _onCoreReady() {
	      // Get current container. (To disable bindings during ad playback)
	      this._container = this.core.getCurrentContainer();
	      if (!this._container) {
	        this._pluginError('failed to get Clappr current container');
	      }

	      // Get current playback. (To get playback element)
	      this._playback = this.core.getCurrentPlayback();
	      if (!this._playback) {
	        this._pluginError('failed to get Clappr playback');
	      }

	      // Get poster plugin. (May interfere with media control)
	      this._posterPlugin = this._container.getPlugin('poster');
	      if (!this._posterPlugin) {
	        this._pluginError('failed to get Clappr internal poster plugin');
	      }

	      // Get click-to-pause plugin. (May interfere with advert click handling)
	      this._clickToPausePlugin = this._container.getPlugin('click_to_pause');
	      if (!this._clickToPausePlugin) {
	        this._pluginError('failed to get Clappr internal click-to-pause plugin');
	      }

	      this._contentElement = this._playback.el;
	      this._initPlugin();
	    }
	  }, {
	    key: '_disableControls',
	    value: function _disableControls() {
	      this.core.disableMediaControl();
	      this._posterPlugin.disable();
	      this._clickToPausePlugin.disable();
	      // this._container.stopped() // Little trick to avoid spinner plugin display
	      this._container.stopListening();
	    }
	  }, {
	    key: '_enableControls',
	    value: function _enableControls() {
	      this._container.bindEvents();
	      this._clickToPausePlugin.enable();
	      this._posterPlugin.enable();
	      this.core.enableMediaControl();
	      this.core.mediaControl.onLoadedMetadataOnVideoTag(); // Little trick to fix iOS fullscreen button display
	    }
	  }, {
	    key: '_initPlugin',
	    value: function _initPlugin() {
	      var _this2 = this;

	      // Ensure browser can play video content. (Avoid to display an ad with nothing after)
	      if (this._playback.name === 'no_op') {
	        this.destroy();

	        return;
	      }

	      // Ensure playback is using HTML5 video element (other playback not supported)
	      if (this._playback.tagName !== 'video') {
	        this.destroy();

	        return;
	      }

	      // Display overlay (with loader icon)
	      this._$clickOverlay.show();

	      // Disable Clappr during ad playback
	      process.nextTick(function () {
	        return _this2._disableControls();
	      });

	      this._useDummyMp4Video = false;
	      this._useBlackSvgPixel = false;

	      var src = this._playback.el && this._playback.el.src;
	      if (!src || src.length === 0) {
	        // Ensure video element has one source loaded (expected by most of ad SDK libraries)
	        // This is required if loaded source is a .m3u8 handled by hls.js playback (src is empty)
	        this._playback.el.src = _dummyMp4Video2.default;
	        this._useDummyMp4Video = true;
	      } else if (this._playback.name === 'html5_video' && !this._playback.el.hasAttribute('poster')) {
	        // Hide video source preview using a black 1 pixel video poster. (Smoother user experience on iOS/MacOSX)
	        this._playback.el.poster = 'data:image/svg+xml,' + _blackSvgPixel2.default;
	        this._useBlackSvgPixel = true;
	      }

	      // Note that some ad SDK may also change the video element styles without properly restoring state after ad playback.
	      // A possible enhancement could be also to backup element styles and restore them after ad playback.

	      this._pluginIsReady = true;
	      this._initImaSDK();
	    }
	  }, {
	    key: '_createImaContainer',
	    value: function _createImaContainer() {
	      this._destroyImaContainer();
	      // IMA does not clean ad container when finished
	      // For the sake of simplicity, wrap into a <div> element
	      if (this._adContainer) {
	        this._imaContainer = document.createElement('div');
	        this._adContainer.appendChild(this._imaContainer);
	      }
	    }
	  }, {
	    key: '_destroyImaContainer',
	    value: function _destroyImaContainer() {
	      if (this._imaContainer && this._adContainer) {
	        this._adContainer.removeChild(this._imaContainer);
	        delete this._imaContainer;
	      }
	    }
	  }, {
	    key: '_createAdDisplayContainer',
	    value: function _createAdDisplayContainer() {
	      this._createImaContainer();
	      this._adDisplayContainer = new google.ima.AdDisplayContainer(this._imaContainer, this._contentElement);
	    }
	  }, {
	    key: '_initImaSDK',
	    value: function _initImaSDK() {
	      if (!this._imaIsloaded || !this._pluginIsReady) {
	        return;
	      }

	      this._createAdDisplayContainer();
	      this._requestAd();
	    }
	  }, {
	    key: '_requestAd',
	    value: function _requestAd() {
	      var _this3 = this;

	      var adsLoader = new google.ima.AdsLoader(this._adDisplayContainer);

	      adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (e) {
	        _this3._onAdsManagerLoaded(e);
	      });

	      adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
	        _this3._onAdError(e);
	      });

	      var adsRequest = new google.ima.AdsRequest();
	      adsRequest.adTagUrl = this._tag;
	      adsRequest.linearAdSlotWidth = this._contentElement.offsetWidth;
	      adsRequest.linearAdSlotHeight = this._contentElement.offsetHeight;
	      adsRequest.nonLinearAdSlotWidth = this._contentElement.offsetWidth;
	      adsRequest.nonLinearAdSlotHeight = this._contentElement.offsetHeight;

	      // requestAds() trigger _onAdsManagerLoaded() or _onAdError()
	      adsLoader.requestAds(adsRequest);
	    }
	  }, {
	    key: '_onAdsManagerLoaded',
	    value: function _onAdsManagerLoaded(adsManagerLoadedEvent) {
	      var _this4 = this;

	      var adsRenderingSettings = new google.ima.AdsRenderingSettings();

	      // This could also set to false and ensure playback state is restored
	      // Note also that Clappr destroy video src on stop and set src value on play
	      adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;

	      this._adsManager = adsManagerLoadedEvent.getAdsManager(this._contentElement, adsRenderingSettings);

	      this._adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
	        _this4._onAdError(e);
	      });

	      this._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, function () {
	        console.log('AdEvent.CONTENT_RESUME_REQUESTED');
	        _this4._playVideoContent();
	      });

	      this._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, function () {
	        console.log('AdEvent.CONTENT_PAUSE_REQUESTED');
	      });

	      this._adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, function () {
	        console.log('AdEvent.LOADED');
	      });

	      this._adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, function () {
	        console.log('AdEvent.CLICK');
	      });

	      this._adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, function () {
	        console.log('AdEvent.IMPRESSION');
	      });

	      this._adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, function () {
	        console.log('AdEvent.STARTED');
	      });

	      this._adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, function () {
	        console.log('AdEvent.FIRST_QUARTILE');
	      });

	      this._adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, function () {
	        console.log('AdEvent.MIDPOINT');
	      });

	      this._adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, function () {
	        console.log('AdEvent.THIRD_QUARTILE');
	      });

	      this._adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, function () {
	        console.log('AdEvent.COMPLETE');
	      });

	      this._adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, function () {
	        console.log('AdEvent.PAUSED');
	      });

	      this._adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, function () {
	        console.log('AdEvent.RESUMED');
	      });

	      this._adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, function () {
	        console.log('AdEvent.SKIPPED');
	      });

	      this._adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, function () {
	        console.log('AdEvent.USER_CLOSE');
	      });

	      this._setupOverlay();
	    }
	  }, {
	    key: '_onAdError',
	    value: function _onAdError(adErrorEvent) {
	      // google.ima.AdErrorEvent : https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdErrorEvent
	      // google.ima.AdError : https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdError
	      console.log('onAdError: ' + adErrorEvent.getError());
	      this._playVideoContent();
	    }
	  }, {
	    key: '_setupOverlay',
	    value: function _setupOverlay() {
	      var _this5 = this;

	      // Ad start must be done as the result of a user action on mobile.
	      // For more details, read https://developers.google.com/interactive-media-ads/docs/sdks/html5/mobile_video
	      if (!this._autostart || _clappr.Browser.isMobile) {
	        var _ret = function () {
	          var startAd = function startAd(e) {
	            try {
	              _this5._clickOverlay.removeEventListener('click', startAd, false);
	              e.preventDefault();
	              e.stopPropagation();
	            } catch (err) {}
	            _this5._$clickOverlay.hide();
	            _this5._playAds();
	          };
	          _this5._setPlayIcon();
	          _this5._clickOverlay.addEventListener('click', startAd, false);

	          return {
	            v: void 0
	          };
	        }();

	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	      }

	      // Otherwise, autostart ad display
	      this._$clickOverlay.hide();
	      this._playAds();
	    }
	  }, {
	    key: '_playAds',
	    value: function _playAds() {
	      this._contentElement.load();
	      this._adDisplayContainer.initialize();

	      try {
	        this._adsManager.init(this._contentElement.offsetWidth, this._contentElement.offsetHeight, google.ima.ViewMode.NORMAL);
	        this._adsManager.start();
	      } catch (e) {
	        console.log('adsManager catched error', e);
	        this._playVideoContent();
	      }
	    }
	  }, {
	    key: '_playVideoContent',
	    value: function _playVideoContent() {
	      var _this6 = this;

	      if (this._useBlackSvgPixel) {
	        this._playback.$el.attr('poster', null);
	      }

	      if (this._useDummyMp4Video) {
	        // Clappr HTML5 video playback stop() method remove the src element.
	        this.core.mediaControl.stop();
	      }

	      // Ensure overlay is removed
	      this._$clickOverlay.hide();

	      process.nextTick(function () {
	        _this6._enableControls();
	        _this6.destroy();
	        _this6.core.mediaControl.play();
	      });
	    }
	  }, {
	    key: '_remove',
	    value: function _remove() {
	      if (this._$adContainer) {
	        this._$adContainer.remove();
	      }
	      if (this._$clickOverlay) {
	        this._$clickOverlay.remove();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this._remove();
	      this._$adContainer = (0, _clappr.$)("<div />").addClass("preroll-container").attr('data-preroll', '');
	      this._$clickOverlay = (0, _clappr.$)("<div />").addClass("preroll-overlay").attr('data-preroll', '');
	      this._$clickOverlay.append(_loader2.default).find('svg path').css('fill', '#fff');
	      this._$clickOverlay.find('svg').addClass('preroll-overlay-icon').attr('data-preroll', '');
	      this.$el.append(this._$adContainer);
	      this.$el.append(this._$clickOverlay);
	      this._adContainer = this._$adContainer[0];
	      this._clickOverlay = this._$clickOverlay[0];

	      return this;
	    }
	  }, {
	    key: '_setPlayIcon',
	    value: function _setPlayIcon() {
	      this._$clickOverlay.find('svg').replaceWith(_play2.default);
	      this._$clickOverlay.find('svg path').css('fill', '#fff');
	      this._$clickOverlay.find('svg').addClass('preroll-overlay-icon').attr('data-preroll', '');
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      if (this._adsManager) {
	        this._adsManager.destroy();
	      }
	      this._destroyImaContainer();
	      _get(ClapprGoogleImaHtml5PrerollPlugin.prototype.__proto__ || Object.getPrototypeOf(ClapprGoogleImaHtml5PrerollPlugin.prototype), 'destroy', this).call(this);
	    }
	  }]);

	  return ClapprGoogleImaHtml5PrerollPlugin;
	}(_clappr.UICorePlugin);

	exports.default = ClapprGoogleImaHtml5PrerollPlugin;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports) {

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

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js?includePaths[]=/home/kslimani/projects/clappr-google-ima-html5-preroll/node_modules/compass-mixins/lib!./style.sass", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js?includePaths[]=/home/kslimani/projects/clappr-google-ima-html5-preroll/node_modules/compass-mixins/lib!./style.sass");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".google-ima-html5-preroll-plugin[data-preroll] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: left; }\n  .google-ima-html5-preroll-plugin[data-preroll] .preroll-container[data-preroll] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n  .google-ima-html5-preroll-plugin[data-preroll] .preroll-overlay[data-preroll] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1337;\n    background-color: #000;\n    cursor: pointer;\n    overflow: hidden;\n    display: none; }\n    .google-ima-html5-preroll-plugin[data-preroll] .preroll-overlay[data-preroll]:hover .preroll-overlay-icon[data-preroll] {\n      opacity: 1; }\n    .google-ima-html5-preroll-plugin[data-preroll] .preroll-overlay[data-preroll] .preroll-overlay-icon[data-preroll] {\n      position: relative;\n      width: 100%;\n      height: 25%;\n      top: 50%;\n      transform: translateY(-50%);\n      opacity: 0.75; }\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// 1x1 black SVG pixel
	var BLACK_SVG_PIXEL = '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1" viewBox="0 0 1 1"><rect x="0" y="0" width="1" height="1" fill="#000000" /></svg>';
	exports.default = BLACK_SVG_PIXEL;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// Base64 encoded dummy mp4 video
	var DUMMY_MP4_VIDEO = 'data:video/mp4;base64, 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'; // eslint-disable-line
	exports.default = DUMMY_MP4_VIDEO;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (cb, secure) {
	  var win = window,
	      doc = document,
	      el = 'script';

	  if (win.google && win.google.ima) {
	    if (typeof cb === 'function') cb();

	    return;
	  }

	  var s = secure === true ? 'https:' : '';
	  var first = doc.getElementsByTagName(el)[0];
	  var script = doc.createElement(el);

	  script.src = s + '//imasdk.googleapis.com/js/sdkloader/ima3.js';
	  script.async = true;
	  if (typeof cb === 'function') script.onload = cb;
	  first.parentNode.insertBefore(script, first);
	};

	module.exports = exports['default']; /**
	                                      * Google IMA HTML5 SDK lazy loader.
	                                      * @function
	                                      * @param {function} The library loaded callback.
	                                      * @param {boolean} Set to true to force HTTPS load protocol. (Default behaviour is to match current protocol)
	                                      */

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path fill=\"#010101\" d=\"M1.425.35L14.575 8l-13.15 7.65V.35z\"></path></svg>"

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<svg version=\"1.1\" id=\"svg-spinner\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 80 80\" xml:space=\"preserve\"><path id=\"spinner\" fill=\"#D43B11\" d=\"M40,72C22.4,72,8,57.6,8,40C8,22.4, 22.4,8,40,8c17.6,0,32,14.4,32,32c0,1.1-0.9,2-2,2 s-2-0.9-2-2c0-15.4-12.6-28-28-28S12,24.6,12,40s12.6, 28,28,28c1.1,0,2,0.9,2,2S41.1,72,40,72z\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 40 40\" to=\"360 40 40\" dur=\"0.6s\" repeatCount=\"indefinite\"></animateTransform></path></svg>"

/***/ }
/******/ ])
});
;
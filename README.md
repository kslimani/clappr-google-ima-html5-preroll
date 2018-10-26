# Google IMA HTML5 preroll ad plugin for Clappr player

[Google IMA HTML5 SDK (v3)](https://developers.google.com/interactive-media-ads/docs/sdks/html5/quickstart) __LINEAR PREROLL AD ONLY__ ad plugin for [Clappr](https://github.com/clappr/clappr) video player.

This is a simple __proof of concept__ based on [Clappr ad skeleton plugin](https://github.com/kslimani/clappr-html5-preroll-skeleton-plugin) example.

This plugin is supported __ONLY__ by Clappr version `0.2.87` or greater. (_For older Clappr versions, use the `0.0.7` or `0.1.0` version of the plugin_).

On mobile devices, it support only [Clappr playbacks](https://github.com/clappr/clappr/tree/master/src/playbacks) which use an HTML5 video element.

See also [demo page](https://kslimani.github.io/clappr-google-ima-html5-preroll/) hosted on Github.

# Usage

Add both Clappr and the plugin scripts to your HTML:

```html
<head>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.min.js"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/clappr-google-ima-html5-preroll-plugin@latest/dist/clappr-google-ima-html5-preroll-plugin.min.js"></script> // yes, that's a long name ;-)
</head>
```

Then just add `ClapprGoogleImaHtml5PrerollPlugin` into the list of plugins of your player instance, and the options for the plugin go in the `googleImaHtml5PrerollPlugin` property as shown below.

```javascript
var player = new Clappr.Player({
  source: "http://your.video/here.mp4",
  autoPlay: false, // Set to false and use plugin autostart option (or set to true if tag is false)
  plugins: {
    core: [ClapprGoogleImaHtml5PrerollPlugin],
  },
  googleImaHtml5PrerollPlugin: {
    tag: 'VAST_TAG_URL', // VAST tag URL (or false to disable plugin)
    vpaid: 1, // Default is 0 (0 is DISABLED, 1 is ENABLED and 2 is INSECURE)
    // autostart: false, // Default is true
    // events: { /* Event map */ },
    // imaLoadTimeout: 3000, // Default is 6000 milliseconds
    // nonLinearDuration: 20000, // Default is 15000 milliseconds
    // maxDuration: 30000, // Default is false (DISABLED)
    // locale: 'fr', // Any two-letter ISO 639-1 code. Default is false (Do not setup)
    // disableLoader: true, // Default is false (Loader is enabled)
  }
});
```

For more details about VPAID modes, see [Google IMA VPAID 2 support](https://developers.google.com/interactive-media-ads/docs/sdks/html5/vpaid2js#enabling).

## Events

For more details, see [Google IMA events types](https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#values_3).

```javascript
  // [...]
  googleImaHtml5PrerollPlugin: {
    events: {
      content_resume_requested: function() { console.log('content_resume_requested') },
      content_pause_requested: function() { console.log('content_pause_requested') },
      loaded: function() { console.log('loaded') },
      click: function() { console.log('click') },
      impression: function() { console.log('impression') },
      started: function() { console.log('started') },
      first_quartile: function() { console.log('first_quartile') },
      midpoint: function() { console.log('midpoint') },
      third_quartile: function() { console.log('third_quartile') },
      complete: function() { console.log('complete') },
      paused: function() { console.log('paused') },
      resumed: function() { console.log('resumed') },
      skipped: function() { console.log('skipped') },
      user_close: function() { console.log('user_close') },
      ad_error: function(e) { console.log('ad_error: ' + e.getError()) }, // AdErrorEvent
      error: function(e) { console.log('error', e) },
    }
  }
  // [...]
```

# Development

Install dependencies :

```shell
  yarn install
```

Start HTTP dev server (http://0.0.0.0:8080) :

```shell
  yarn run start
```

# Google IMA HTML5 preroll ad plugin for Clappr player

[Google IMA HTML5 SDK (v3)](https://developers.google.com/interactive-media-ads/docs/sdks/html5/quickstart) __preroll only__ ad plugin for [Clappr](https://github.com/clappr/clappr) video player.

This is a simple proof of concept based on [Clappr ad skeleton plugin](https://github.com/kslimani/clappr-html5-preroll-skeleton-plugin) example.

It should be supported by Clappr `0.2.x` branch version.

It support ONLY [Clappr playbacks](https://github.com/clappr/clappr/tree/master/src/playbacks) which use an HTML5 video element. ('hls', 'html5_video', etc...). This mean Flash playback is not supported yet.

See also [demo page](https://kslimani.github.io/clappr-google-ima-html5-preroll/) hosted on Github.

# Usage

Add both Clappr and the plugin scripts to your HTML:

```html
<head>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/clappr/0.2.63/clappr.min.js"></script>
  <script type="text/javascript" src="dist/clappr-google-ima-html5-preroll-plugin.js"></script> // yes, that's a long name ;-)
</head>
```

Then just add `ClapprGoogleImaHtml5PrerollPlugin` into the list of plugins of your player instance, and the options for the plugin go in the `googleImaHtml5PrerollPlugin` property as shown below.

```javascript
var player = new Clappr.Player({
  source: "http://your.video/here.mp4",
  plugins: {
    core: [ClapprGoogleImaHtml5PrerollPlugin],
  },
  googleImaHtml5PrerollPlugin: {
    tag: 'VAST_TAG_URL',
    // autostart: false, // Default is true
    // events: { /* Event map */ },
  }
});
```

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
  npm install
```

Dist build :

```shell
  npm run dist
```

Watch mode :

```shell
  npm run watch
```

Start HTTP server (http://0.0.0.0:8080/demo/) :

```shell
  npm run demo
```

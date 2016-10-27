# Google IMA HTML5 preroll ad plugin for Clappr player

[Google IMA HTML5 SDK (v3)](https://developers.google.com/interactive-media-ads/docs/sdks/html5/quickstart) __preroll only__ ad plugin for [Clappr](https://github.com/clappr/clappr) video player.

This is a simple proof of concept based on [Clappr ad skeleton plugin](https://github.com/kslimani/clappr-html5-preroll-skeleton-plugin) example.

It should be supported by Clappr `0.2.x` branch version.

It support ONLY [Clappr playbacks](https://github.com/clappr/clappr/tree/master/src/playbacks) which use an HTML5 video element. ('hls', 'html5_video', etc...). This mean Flash playback is not supported yet.

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
  }
});
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

var path = require('path')
var webpack = require('webpack')
var Clean = require('clean-webpack-plugin')

var plugins = []
var babelCompact = false

if (process.env.npm_lifecycle_event === 'dist-min') {
  // *** Uncomment the following lines to suppress UglifyJS warnings ***
  // plugins.push(new webpack.optimize.UglifyJsPlugin({
  //   compress: {warnings: false},
  //   output: {comments: false}
  // }))
  babelCompact = true
} else {
  plugins.push(new Clean(['dist'], {verbose: false}))
}

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  plugins: plugins,
  externals: {
   clappr: {
    amd: 'clappr',
    commonjs: 'clappr',
    commonjs2: 'clappr',
    root: 'Clappr'
   }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
            compact: babelCompact,
        }
      },
      {
        test: /\.sass$/,
        loaders: ['css', 'sass?includePaths[]=' + path.resolve(__dirname, "./node_modules/compass-mixins/lib")],
      },
      {
        test: /\.svg/,
        loader: 'svg-inline'
      },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'clappr-google-ima-html5-preroll-plugin.js',
    library: 'ClapprGoogleImaHtml5PrerollPlugin',
    libraryTarget: 'umd',
  },
}

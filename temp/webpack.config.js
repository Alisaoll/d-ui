const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const DEBUG = process.env.NODE_ENV !== 'production'

module.exports = {
  debug: DEBUG,

  devtool: DEBUG ? 'source-map' : '',

  entry: {
    main: './src/js/index.js',
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: path.join('[name].js'),
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|jpg|png)/,
        loader: 'url-loader?limit=268192'
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader")
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.json$/, loader: 'json' },
    ]
  },

  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.jsx'],
  },

  plugins: DEBUG ? [
    new ExtractTextPlugin(path.join('[name].css')),
  ] : [
    new ExtractTextPlugin(path.join('[name].css')),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
  ]
}

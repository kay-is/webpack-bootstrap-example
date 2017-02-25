const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractText = new ExtractTextPlugin('main.css')

module.exports = {
  
  entry: './index.less',

  output: {
    filename: '[name].js',
    path: './build/',
  },

  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            {loader: 'css-loader', options: {minimize: true}},
            'less-loader',
          ],
        })
      }
    ]
  },

  plugins: [extractText],

}
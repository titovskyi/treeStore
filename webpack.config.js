const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
	watch: true,

	module: {
rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: ''
            }
          }
        ]
      },
      { 
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, 
        loader: 'file-loader?name=fonts/[name].[ext]' 
      }
    ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
        // new webpack.ProvidePlugin({
        //   $: 'jquery',
        //   jQuery: 'jquery',
        //   'window.jQuery': 'jquery',
        //   Popper: ['popper.js', 'default']
        // })
    ]
};
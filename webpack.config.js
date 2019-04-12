const
 path = require('path'),
 htmlWebpackPlugin = require('html-webpack-plugin'),
 CleanWebpackPlugin = require('clean-webpack-plugin'),
 webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: ['webpack-hot-middleware/client?name=app&reload=true', './src/Index.js']

  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: './src/index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  // adding a rule to load css and style-css module
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: [
          /(node_modules|bower_components)/
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};

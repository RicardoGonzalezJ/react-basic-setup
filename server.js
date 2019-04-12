'use strict';
const
  express = require('express'),
  webpack = require('webpack'),
  wpDevMdw = require('webpack-dev-middleware'),

  app = express(),
  config = require('./webpack.config'),
  compiler = webpack(config);

  // Tell express to use the webpack-dev-middleware and use the webpack.config.js
  // configuration file as a base.
  app.use(wpDevMdw(compiler, {
    publicPath: config.output.publicPath
  }));

  // to reload browser after updates
  app.use(require("webpack-hot-middleware")(compiler));

  // Serve the files on port 3000
  app.listen(3000, ()=>{
    console.log('Example app listening on port 3000!\n');
  })

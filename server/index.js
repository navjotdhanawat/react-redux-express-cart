const express = require('express');
const path = require('path');
const port = process.env.PORT || 4000;
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
// var mv = require('module-visualizer');
// mv.embed({});

var database = require('./database');
mongoose.connect(database.url);

const isDevelopment = process.argv.indexOf('--development') !== -1;

if (isDevelopment) {

  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config');

  const compiler = webpack(webpackConfig);
  app.use(cors({ origin: '*' }));
  app.use(require('webpack-dev-middleware')(compiler, {

    hot: true,
    stats: {
      colors: true
    }
  }));

  app.use(require('webpack-hot-middleware')(compiler));

} else {
  app.use(cors({ origin: '*' }));
  app.use(express.static(path.resolve(__dirname, '../build')));
  app.use(express.static(path.resolve(__dirname, '../client')));
  app.use(express.static(path.resolve(__dirname, '../node_modules')));
}

require('./routes.js')(app);

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../build/index.html'))
});
var appRoot = require('app-root-path');
app.listen(port);
console.log(appRoot + "  ========:::::::::::::::");
console.log(`server started on port: ${port}`);

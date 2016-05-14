/*
  app.js

  Express app configuration
*/

'use strict';

const express    = require('express');
const path       = require('path');
const logger     = require('morgan');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');

// Connect to our database
//
mongoose.connect(process.env.MONGODB_URI);

// Configure our Express app
//
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

// HTTPS all the time. Redirect to HTTPS if I find the Heroku header.
//
app.use(function(req, res, next) {
  if(req.headers && req.headers['x-forwarded-proto'] && req.headers['x-forwarded-proto'] != 'https') {
    res.redirect(301, 'https://' + req.hostname + req.originalUrl); // 301 Moved Permanently
  }
  else {
    next();
  }
});

// Serve up our static client-side files
//
app.use(express.static(__dirname + '/public'));

module.exports = app;

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
const routes     = require('./routes/routes.js');
const cors       = require('cors');
const compression = require('compression');

// Connect to our database
//
// We're not using /blob GET/PUT so disabling db for now (makes local deployment set easier)
//mongoose.connect(process.env.MONGODB_URI);

// Configure our Express app
//
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(compression());

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

// Serve up static client-side files
//
app.use(express.static(__dirname + '/public'));

// Mount Express app routes
//
app.use('/', routes);

// Route not found handler (404). This is the last route we'll add to our middleware stack.
// If we make it this far we know no other route handled the request.
//
app.use((req, res) => {
  res.status(404).render('error.ejs', {
    title   : 'Yeah, wow. I have no idea where that is.',
    code    : '404',
    message : `${req.method} ${req.headers.host}${req.url}`,
    stack   : ''
  });
});

// Unhandled errors (500)
//
app.use((error, req, res, next) => {
  res.status(500).render('error.ejs', {
    title   : 'Yeah, that\'s broken.',
    code    : '500',
    message : `${req.method} ${req.headers.host}${req.url}`,
    stack   : app.get('env') === 'development' ? error.stack : ''
  });
});

module.exports = app;

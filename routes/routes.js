/*
  routes.js

  Configure routes for our application.
*/

'use strict';

const express = require('express');
const router  = express.Router();
const Blob    = require('../models/blob.js');
const _       = require('underscore');
const http    = require('http');
const faker   = require('faker');

router.get('/blob/:uuid', (req, res, next) => {

  Blob.findOne({ uuid : req.params.uuid }, (err, blob) =>
  {
    if(err) {
      res.status(500).send(err);
    }
    else if(!blob) {
      res.status(404).send(`Blob ${req.params.uuid} not found`);
    }
    else {
      res.status(200).send(_.omit(blob.toObject(), ['_id', '__v']));
    }
  });
});

router.put('/blob/:uuid', (req, res, next) => {

  const query = { uuid : req.params.uuid };

  const update = {
    uuid : req.params.uuid,
    blob : req.body,
    creationDate : new Date()
  };

  const options = { upsert : true, new : true };

  Blob.findOneAndUpdate(query, update, options, (err, blob) => {
    if(err) {
      res.status(500).send(err);
    }
    else {
      res.status(200).send(`OK ${req.params.uuid}`);
    }
  });
});

router.get('/http-get-proxy/:url', (req, res, next) => {
  try {
    let getRequest = http.get(decodeURIComponent(req.params.url), response => {
      let body = '';
      response.on('data', data => (body += data));
      response.on('end', () =>  res.status(200).send(body));
      response.on('error', err => res.status(500).send(err.message));
    });

    getRequest.on('error', err => res.status(500).send(err));
  }
  catch(e) {
    res.status(500).send(err);
  }
});

router.get('/random/employee', (req, res, next) => {
  return res.status(200).send({
    imageUrl : faker.image.avatar(),
    name : faker.name.findName(),
    jobTitle : faker.name.jobTitle(),
    wordsOfWisom : faker.hacker.phrase()
  });
});

router.get('/random/words/:count', (req, res, next) => {
  return res.status(200).send({
    words : faker.random.words(req.params.count).split(' ')
  });
});

module.exports = router;

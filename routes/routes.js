/*
  routes.js

  Configure routes for our application.
*/

'use strict';

const express = require('express');
const router  = express.Router();
const Blob    = require('../models/blob.js');
const _       = require('underscore');

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

module.exports = router;

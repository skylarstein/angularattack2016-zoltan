/*
  routes.js

  Configure routes for our application.
*/

'use strict';

const express = require('express');
const router  = express.Router();

router.get('/blob/:id', (req, res, next) => {
  res.status(200).send(`OK ${req.params.id}`);
});

router.put('/blob/:id', (req, res, next) => {
  res.status(200).send(`OK ${req.params.id}`);
});

module.exports = router;

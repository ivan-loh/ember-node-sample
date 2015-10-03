'use strict';

const express = require('express');
const router  = express.Router();

module.exports = function (app) {
  app.use('/comments', router);
};

router.get('/', function (req, res) {
  res.jsonp([]);
});

router.post('/', function (req, res) {
  console.log(req.body);
  res.jsonp('');
});

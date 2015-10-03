'use strict';

const express = require('express');
const router = express.Router();

module.exports = function (app) {
  app.use('/posts', router);
};

router.get('/', function (req, res, next) {
  res.jsonp({
    "posts": [
      {
        "id": 1,
        "title": "Rails Rambo",
        "body": "some really long post about something"
      }
    ]
  });
});

router.post('/', function (req, res) {

  const body = req.body;
  const post = body.post;

  //TODO: Persist to DB Here.

  res.jsonp('');
});

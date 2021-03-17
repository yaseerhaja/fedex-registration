const express = require("express");
const router = express.Router();
const request = require('request');

const logger = require('../../logger');
const API_END_POINT = process.env.API_END_POINT;

router.post("/register", (req, res) => {
  logger.log("info", "%s", req.originalUrl);

  const uri = `https://${API_END_POINT}`;
  var post_options = {
    url: uri,
    headers: {
      'Content-Type': 'application/json'
    },
    json: false,
    body: JSON.stringify(req.body)
  };

  request.post(post_options, (error, response, body) => {
    if (error) {
      res.send(error);
    } else {
      res
        .header(response.header)
        .status(response.statusCode)
        .send({payload: 'Success'});
    }
  });
});

module.exports = router;

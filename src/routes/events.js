const express = require('express');
const router = express.Router();
const events = require('../data/seeds/events.json');


// Search query parameters
const queryParams = ['title', 'category', 'location'];

  router.get('/search', (req, res) => {
    const query = {};
  
    queryParams.forEach((param) => {
      if (req.query[param]) {
        query[param] = req.query[param];
      }
    });

  
    const results = events.filter((event) => {
      return Object.keys(query).every((key) => {
        return event[key].toLowerCase().includes(query[key].toLowerCase());
      });
    });
  
    res.json(results);
  });

module.exports = router;
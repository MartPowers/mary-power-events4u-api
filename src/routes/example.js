const express = require('express');
const router = express.Router();

// Define routes here
router.get('/example', (req, res) => {
  res.send('This is an example route');
});

module.exports = router;
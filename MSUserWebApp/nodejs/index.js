var express = require('express');
var router = express.Router();

/* GET - console page */
router.get('/', function(req, res, next) {
  res.sendFile('console.html', { root: './public'});
});

module.exports = router;

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET tests page. */
router.get('/tests', function(req, res, next) {
  res.render('tests', { title: 'Testing database connections...' });
});

module.exports = router;

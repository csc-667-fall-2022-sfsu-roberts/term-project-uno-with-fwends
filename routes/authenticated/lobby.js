const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('authenticated/lobby', { });
});

module.exports = router;
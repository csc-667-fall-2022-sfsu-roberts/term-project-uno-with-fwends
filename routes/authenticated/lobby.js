const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (_request, response) => {
  response.render('authenticated/lobby', { });
});

module.exports = router;
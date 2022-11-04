const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (_request, response) => {
  response.render('unauthenticated/index', { });
});

module.exports = router;
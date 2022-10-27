const express = require('express');
const router = express.Router();

/* GET signup page. */
router.get('/signup', (_request, _response) => {
  res.render('unauthenticated/signup', { });
});

/* GET login page. */
router.get('/login', (_request, _response) => {
    res.render('unauthenticated/login', { });
  });

module.exports = router;
const express = require('express');
const router = express.Router();

/* GET Home page. */
router.get('/', (request, res) => {
    res.render('unauthenticated/index', { });
  });

  /* GET signup page. */
router.get('/signup', (req, res) => {
    res.render('unauthenticated/signup', { });
  });
  
  /* GET login page. */
  router.get('/login', (req, res) => {
      res.render('unauthenticated/login', { });
    });



module.exports = router;
const express = require('express');
const router = express.Router();

/* GET Home page. 
router.get('/', (_request, response) => {
    response.render('unauthenticated/index', { });
  });
*/
  /* GET signup page. */
router.get('/signup', (_request, response) => {
    response.render('unauthenticated/signup', { });
  });
  
  /* GET login page. */
  router.get('/login', (_request, response) => {
      response.render('unauthenticated/login', { });
    });

    /* GET register page. */
  router.get('/register', (_request, response) => {
    response.render('unauthenticated/register', { });
  });

module.exports = router;
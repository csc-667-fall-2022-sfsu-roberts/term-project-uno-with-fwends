const express = require('express');
const router = express.Router();

/* GET Home page. 
router.get('/', (_request, response) => {
    response.render('unauthenticated/index', { });
  });
*/
  
  /* GET login get page. */
  router.get('/login', (_request, response) => {
      response.render('unauthenticated/login', { });
    });

  /* GET login post page. */
  router.post('/login', (request, response) => {
    const {username, password } = request.body;

    response.json({username, password}); 
  }); 

    /* GET register get page. */
  router.get('/register', (_request, response) => {
    response.render('unauthenticated/register', { });
  });

  /* GET register post page. */
  router.post('/register', (request, response) => {
    const {username, password } = request.body;
    // needed for retrieving input 
    response.json({username, password}); 
  });

module.exports = router;
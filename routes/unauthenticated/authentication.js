const express = require('express');
const { request } = require('../../app');
const router = express.Router();

/* GET Home page. 
router.get('/', (_request, response) => {
    response.render('unauthenticated/index', { });
  });
*/
  
  /* GET login get page. */
  router.get('/login', (request, response) => {
      response.render('unauthenticated/login', { 
        username: request.session.username, 
      });
    });

  /* GET login post page. */
  router.post('/login', (request, response) => {
    const {username, password } = request.body;

    request.session.authenticated = true;
    request.session.username = username;   

    response.redirect("/auth/login") 
  }); 

    /* GET register get page. */
  router.get('/register', (request, response) => {
    response.render('unauthenticated/register', { 
      username: request.session.username,
    });
  });

  /* GET register post page. */
  router.post('/register', (request, response) => {
    const {username, password } = request.body;

    request.session.authenticated = true; //sessions middleware for encripting/decrypting cookkes
    request.session.username = username;

    response.redirect("/auth/register") // needed for retrieving input 

  });

module.exports = router;
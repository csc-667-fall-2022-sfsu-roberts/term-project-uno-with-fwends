const express = require('express');
//const { request } = require('../../app');
const Users = require("../../db/users"); 
const router = express.Router();
  
  /* GET login get page. */
  router.get('/login', (request, response) => {
      response.render('unauthenticated/login', { 
        username: request.session.username, 
      });
    });

  /* GET login post page. */
  router.post('/login', (request, response) => {
    const {username, password } = request.body;

    Users.login({ username, password})
    .then(({ id, email }) =>{
      request.session.authenticated = true;
      request.session.username = email;
      request.session.user_id = id;

      response.redirect("/lobby");
  })
    .catch((_error) => response.redirect("/auth/login")); 
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

    Users.register({ username, password})
    .then(({ id, email }) =>{
      request.session.authenticated = true;
      request.session.username = email;
      request.session.user_id = id;

      response.redirect("/lobby");
  })
    .catch((_error) => response.redirect("/auth/register")); 
  });
  
  router.get('/logout', (request, response) => {
    request.session.destroy( (_error) => {
      response.redirect('/');
    }); 
  });

module.exports = router;
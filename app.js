const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

if(process.env.NODE_ENV === 'development') {
  require("dotenv").config();
}

const sessionInstance = require("./app-config/sessions"); 
const protect = require("./app-config/protect"); 

const homeRouter = require('./routes/unauthenticated/index');
const authenticationRouter = require('./routes/unauthenticated/authentication');
const lobbyRouter = require('./routes/authenticated/lobby');
const gamesRouter = require('./routes/authenticated/games');
const testsRouter = require('./routes/tests');
const chatRouter = require('./routes/authenticated/chat');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(sessionInstance); 

app.use('/', homeRouter);
app.use('/auth', authenticationRouter);
app.use('/lobby', protect, lobbyRouter);
app.use('/games', protect, gamesRouter);
app.use('/chat', protect, chatRouter);
app.use('/tests', testsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

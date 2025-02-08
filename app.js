const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');

const indexRouter = require('./routes/index');
const blogRouter = require('./routes/blog');
const bcitRouter = require('./routes/bcit');
const apiRouter = require('./routes/api');
const gracieRouter = require('./routes/gracie');
const fathersDayRouter = require('./routes/fathers-day');

const app = express();

app.use(compression());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/blog', blogRouter);
app.use('/bcit', bcitRouter);
app.use('/api', apiRouter);
app.use('/gracie', gracieRouter);
app.use('/fathers-day', fathersDayRouter);

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

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
import { db } from './shared/db';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/users/test',function (req, res) {

  async function getUsers() {
    try {
      const users = await db.any('SELECT * FROM users');

      console.log(users);
      res.send(JSON.stringify(users, 2));
    } catch (err) {
      console.log(err)
      res.send(err)
    }
  }

  getUsers();

})

app.use('/', (req, res) => res.send(`Hello world! ${process.env.TEST}`));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

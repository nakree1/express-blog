import modelsMiddleware from './middlewares/modelsMiddleware';

const createError = require('http-errors');
const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
const logger = require('morgan');

import bodyParser from "body-parser";
import errorHandler from './controllers/errorHandler';


export const app = express();
const router = require('./routes/router');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// app.use(compression());
// app.use(cookieParser());

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(modelsMiddleware)

app.use('/api', router);


app.get("*", (req, res) => res.sendFile(path.join(__dirname, '..', 'build', 'index.html')))
// app.use('/', (req, res) => res.send(`Hello world! ${process.env.TEST}`));

// catch 404 and forward to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

// error handler
app.use(errorHandler);

module.exports = app;

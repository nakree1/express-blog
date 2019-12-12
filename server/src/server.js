const express = require('express');
const bodyParser = require('body-parser');

const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes');

module.exports = function({ db, logger }) {
  const app = express();
  // app.use(logger);
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use((req, res, next) => {
    req.base = `${req.protocol}://${req.get('host')}`;
    req.logger = logger;
    req.db = db;
    return next();
  });
  app.use('/api', routes);
  app.use(errorHandler);

  return app;
};

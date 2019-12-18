import express from 'express';
import bodyParser from 'body-parser';

import errorHandler from './middlewares/errorHandler';
import routes from './routes';

export default function createApp({ db, logger }) {
  const app = express();
  // app.use(logger);
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use((req, res, next) => {
    req.base = `${req.protocol}://${req.get('host')}`;
    req.logger = logger;
    req.db = db;
    req.context = {};
    return next();
  });
  app.use('/api', routes);
  app.use(errorHandler);

  return app;
}



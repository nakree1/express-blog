import models from '../models/index';

export default (req, res, next) => {
  req.context = { models };
  next();
}


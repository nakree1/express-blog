import models from '../models';

export default (req, res, next) => {
  req.context = { models };
  next();
}


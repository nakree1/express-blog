const { ValidationError } = require('../utils/errors');

module.exports = function createValidateRequest(validator) {
  return function validateRequest(req, res, next) {
    const { isValid, errors } = validator(req.body);

    if (isValid) {
      next();
    } else {
      throw new ValidationError(errors);
    }
  };
};

import { ValidationError } from '../utils/errors';

export default function createValidateRequest(validator) {
  return function validateRequest(req, res, next) {
    const { isValid, errors } = validator(req.body);

    if (isValid) {
      next();
    } else {
      throw new ValidationError(errors);
    }
  };
}

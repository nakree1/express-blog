import BaseError from './BaseError';

export default class ValidationError extends BaseError {
  constructor(errors) {
    super('Invalid request variables');
    this.fields = errors;
  }
}

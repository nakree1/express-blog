const BaseError = require('./BaseError');

module.exports = class ValidationError extends BaseError {
  constructor(errors) {
    super('Invalid request variables');
    this.fields = errors;
  }
};

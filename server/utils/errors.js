const HttpStatus = require('http-status-codes');

class BaseError extends Error {
  constructor(message = 'Internal Server Error') {
    super(message);
    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name;
    this.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    this.message = message;
    this.data = {};
    this.expose = true;
    // This clips the constructor invocation from the stack trace.
    // It's not absolutely essential, but it does make the stack trace a little nicer.
    //  @see Node.js reference (bottom)
    Error.captureStackTrace(this, this.constructor);
  }
}

class ResourceNotFoundError extends BaseError {
  constructor(resource, query) {
    super(`Resource ${resource} was not found.`);
    this.name = 'ResourceNotFoundError';
    this.statusCode = HttpStatus.NOT_FOUND;
    this.data = { resource, query };

    console.dir(this);
  }
}

// I do something like this to wrap errors from other frameworks.
// Correction thanks to @vamsee on Twitter:
// https://twitter.com/lakamsani/status/1035042907890376707
class InternalError extends BaseError {
  constructor(error) {
    super(error.message);
    this.data = { error };
  }
}

module.exports = {
  ResourceNotFoundError,
  InternalError,
};

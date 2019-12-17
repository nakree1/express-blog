import HttpStatus from 'http-status-codes';

function BaseError(name) {
  const temp = Error.apply(this, arguments);
  temp.name = this.name = name || 'Error';
  this.message = 'Internal Server Error';
  this.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
  this.expose = process.env.NODE_ENV === 'development';
  this.data = {};

  Error.captureStackTrace(temp, this.constructor);

  Object.defineProperty(this, 'stack', {
    get: function() {
      if (this.expose) {
        return temp.stack.split('\n').slice(1);
      } else {
        return;
      }
    },
    configurable: true
  });

  Object.defineProperty(this, 'body', {
    get: function() {
      return {
        title: this.name,
        message: this.message,
        data: this.data,
        trace: this.stack
      };
    },
    configurable: true
  });
}

BaseError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: BaseError,
    writable: true,
    configurable: true
  }
});

class ResourceNotFoundError extends BaseError {
  constructor(resource, query) {
    super('ResourceNotFoundError');
    this.message = `Resource ${resource} was not found.`;
    this.statusCode = HttpStatus.NOT_FOUND;
    this.data = { resource, query };
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

export default {
  ResourceNotFoundError,
  InternalError
};

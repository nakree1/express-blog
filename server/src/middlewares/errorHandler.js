import { ValidationError, InternalError } from '../utils/errors';

export default function errorHandler(err, req, res, next) {
  if (err instanceof InternalError) {
    res.status(err.statusCode).send({
      title: err.name,
      message: err.message,

      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }

  if (err instanceof ValidationError) {
    res.status(err.statusCode).send({
      title: err.name,
      message: err.message,
      fields: err.fields
    });
  }

  res.status(err.statusCode || 500).send({
    title: err.name,
    message: err.message
  });
}

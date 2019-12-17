// const { ResourceNotFoundError } = require('../utils/errors');
import { DatabaseError, ValidationError as DBValidationError } from 'sequelize';
import { ValidationError } from '../utils/errors';

export default (err, req, res) => {
  console.error(err);
  if (err instanceof DBValidationError) {
    console.log('Catched');
    res.status(500);
    res.send({
      title: err.name,
      message: err.message
    });
    return
  }
  if (err instanceof DatabaseError) {
    console.error(err);
    console.log('its validation error!');
    res.status(500);
    res.send({
      title: err.name,
      message: err.message
    });
    return;
  }

  if (err instanceof ValidationError) {
    res.status(400).send({
      title: err.name,
      message: err.message,
      fields: err.fields
    });
    return;
  }

  // console.error(err);
  // console.error(err.errors);
  res.status(500);
  res.send({
    title: err.name,
    message: err.message
  });
}

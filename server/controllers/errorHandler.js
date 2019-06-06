import { ResourceNotFoundError } from '../utils/errors';
import { ValidationError, DatabaseError } from 'sequelize';

export default (err, req, res, next) => {
  if (err instanceof ResourceNotFoundError) {
    console.error(err);
    res.status(err.statusCode);
    res.send(err.body);
    return;
  }

  if (err instanceof DatabaseError) {
    console.error(err);
    console.log('its validation error!')
    res.status(500);
    res.send({
      title: err.name,
      message: err.message,
    });
    return;
  }


  console.error(err);
  res.status(500);
  res.send({
      title: err.name,
      message: err.message,
    })
}

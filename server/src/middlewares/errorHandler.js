// const { ResourceNotFoundError } = require('../utils/errors');
const { DatabaseError } = require('sequelize');
const { ValidationError } = require('../utils/errors');

module.exports = (err, req, res) => {
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

  console.error(err);
  console.error(err.errors);
  res.status(500);
  res.send({
    title: err.name,
    message: err.message
  });
};

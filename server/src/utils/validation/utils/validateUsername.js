const { isLength } = require('validator');
const { generate, REQUIRED, LENGTH } = require('./messages');

const field = 'username';

const limit = {
  min: 2,
  max: 256
};

module.exports = function(value) {
  const msg = generate({ field, ...limit });

  const errors = {};

  if (!value) {
    errors[field] = msg[REQUIRED];
  } else if (!isLength(value, limit)) {
    errors[field] = msg[LENGTH];
  }

  return errors;
};

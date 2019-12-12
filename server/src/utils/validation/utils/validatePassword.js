const { isEmail, isLength } = require('validator');
const { generate, REQUIRED, LENGTH, INVALID, MATCH, INFO } = require('./messages');

const field = 'password';
const secondField = 'confirmPassword';

const limit = {
  min: 8,
  max: 256
};

module.exports = function({ password, confirmPassword }) {
  const msg = {
    ...generate({ field, ...limit }),
    [MATCH]: "Passwords don't not match",
    [INFO]: 'Password should contain lower, uppercase letters and numbers or special symbols'
  };

  const lowerCaseUsed = /[a-z]/.test(password);
  const upperCaseUsed = /[A-Z]/.test(password);
  const specSymbolsUsed = /[0-9!@#$%^&*.]/.test(password);

  const errors = {};

  if (!password) {
    errors[field] = msg[REQUIRED];
  } else if (!isLength(password, limit)) {
    errors[field] = msg[LENGTH];
  } else if (!lowerCaseUsed || !upperCaseUsed || !specSymbolsUsed) {
    errors[field] = msg[INFO];
  }

  // if confirmPassword exist
  if (typeof confirmPassword === 'string') {
    if (!confirmPassword) {
      errors[secondField] = msg[REQUIRED];
    } else if (confirmPassword !== password) {
      errors[secondField] = msg[MATCH];
    }
  }

  return errors;
};

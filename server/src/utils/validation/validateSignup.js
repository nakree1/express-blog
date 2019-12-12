const validate = require('./utils/validate');

module.exports = function({ email, username, password, confirmPassword }) {
  debugger;
  const errors = {
    ...validate.email(email),
    ...validate.username(username),
    ...validate.password({ password, confirmPassword })
  };

  return {
    errors,
    isValid: !Object.keys(errors).length
  };
};

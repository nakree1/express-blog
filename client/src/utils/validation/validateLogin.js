import validate from './utils/validate';

export default function({ email, username, password }) {
  let errors = { ...validate.password({ password }) };

  if (username) {
    errors = { ...errors, ...validate.username(username) };
  } else {
    errors = { ...errors, ...validate.email(email) };
  }

  return {
    errors,
    isValid: !Object.keys(errors).length
  };
}

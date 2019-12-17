import validate from './utils/validate';

export default function({ email, username, password, confirmPassword }) {
  const errors = {
    // ...validate.email(email),
    // ...validate.username(username),
    // ...validate.password({ password, confirmPassword })
  };

  return {
    errors,
    isValid: !Object.keys(errors).length
  };
}

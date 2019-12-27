import validate from './utils/validate';


export default function({ password, email }) {
  const errors = {
    ...validate.length({ field: 'password', value: password }),
    ...validate.email({ password }),
  };

  return {
    errors,
    isValid: !Object.keys(errors).length
  };
}

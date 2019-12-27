import validate from './utils/validate';

function matchOldAndNewPasswords({ oldPassword, password }) {
  const errors = {};

  if (oldPassword === password) {
    errors.oldPassword = 'The new password should be different than the old password'
  }

  return errors;
}

export default function({ oldPassword, password, confirmPassword  }) {
  const errors = {
    ...validate.length({ field: 'oldPassword', value: oldPassword }),
    ...validate.password({ password, confirmPassword }),
    ...matchOldAndNewPasswords({ oldPassword, password })

  };

  return {
    errors,
    isValid: !Object.keys(errors).length
  };
}

import validate from './utils/validate';
import { FILE_MIME, FILE_SIZE } from '../../config/constants';

export default function({ username, firstName, lastName, avatar }) {
  let errors = {};

  if (username) {
    errors = { ...errors, ...validate.username(username, 'username') };
  }

  if (firstName) {
    errors = { ...errors, ...validate.username(firstName, 'firstName') };
  }

  if (lastName) {
    errors = { ...errors, ...validate.username(lastName, 'lastName') };
  }

  if (avatar) {
    errors = {
      ...errors,
      ...validate.file({
        field: 'avatar',
        file: avatar,
        allowedMime: FILE_MIME.IMAGES,
        maxSize: FILE_SIZE.AVATAR
      })
    };
  }

  return {
    errors,
    isValid: !Object.keys(errors).length
  };
}

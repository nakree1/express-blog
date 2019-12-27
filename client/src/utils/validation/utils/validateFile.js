import filesize from 'filesize';

import { generate, INVALID, LENGTH, REQUIRED } from './messages';

export default function({ field, file, maxSize = 0, allowedMime = [] }) {
  const msg = {
    ...generate({ field }),
    [LENGTH]: `The size of file should be less than ${filesize(maxSize)}`
  };

  const errors = {};

  if (!file) {
    errors[field] = msg[REQUIRED];
  } else if (!(file instanceof File) || !allowedMime.includes(file.type)) {
    errors[field] = msg[INVALID];
  } else if (file.size > maxSize) {
    errors[field] = msg[LENGTH];
  }

  return errors;
}

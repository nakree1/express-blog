import isLength from 'validator/lib/isLength';

import { generate, LENGTH, REQUIRED } from './messages';

const field = 'username';

const limit = {
  min: 2,
  max: 256
};

export default function(value) {
  const msg = generate({ field, ...limit });

  const errors = {};

  if (!value) {
    errors[field] = msg[REQUIRED];
  } else if (!isLength(value, limit)) {
    errors[field] = msg[LENGTH];
  }

  return errors;
}

import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import { generate, INVALID, LENGTH, REQUIRED } from './messages';

const field = 'email';

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
  } else if (!isEmail(value)) {
    errors[field] = msg[INVALID];
  }

  return errors;
}

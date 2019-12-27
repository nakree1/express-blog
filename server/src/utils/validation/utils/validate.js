import validateEmail from './validateEmail';
import validatePassword from './validatePassword';
import validateUsername from './validateUsername';
import validateLength from './validateLength';

export default {
  length: validateLength,
  email: validateEmail,
  password: validatePassword,
  username: validateUsername
};

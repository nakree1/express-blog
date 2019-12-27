import validateEmail from './validateEmail';
import validatePassword from './validatePassword';
import validateUsername from './validateUsername';
import validateLength from './validateLength';
import validateFile from './validateFile';

export default {
  file: validateFile,
  length: validateLength,
  email: validateEmail,
  password: validatePassword,
  username: validateUsername
};

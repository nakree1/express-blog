import bcrypt from 'bcrypt';
import { PASSWORD_SALT } from '../config/config';


function CryptGenerator(salt) {
  this.salt = salt;
}

CryptGenerator.prototype.hash = function(plainText) {
  return bcrypt.hash(plainText, this.salt);
};

CryptGenerator.prototype.compare = function(plainText, dataHash) {
  return bcrypt.compare(plainText, dataHash);
};

const crypt = new CryptGenerator(PASSWORD_SALT);

console.log(PASSWORD_SALT)

export default crypt;

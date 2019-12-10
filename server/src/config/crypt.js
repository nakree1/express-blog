const bcrypt = require('bcrypt');
const { PASSWORD_SALT } = require('../config/config');

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

module.exports = crypt;

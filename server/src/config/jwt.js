const TokenGenerator = require('../utils/tokenGenerator');
const { TOKEN_SECRET, TOKEN_EXPIRES_IN } = require('./config');

const options = {
  algorithm: 'HS256',
  keyid: '1',
  expiresIn: TOKEN_EXPIRES_IN,
  notBefore: '2s',
  noTimestamp: false
};

const jwt = new TokenGenerator(TOKEN_SECRET, options);

module.exports = jwt;

import TokenGenerator from '../utils/tokenGenerator';
import { TOKEN_EXPIRES_IN, TOKEN_SECRET } from './config';

const options = {
  algorithm: 'HS256',
  keyid: '1',
  expiresIn: TOKEN_EXPIRES_IN,
  notBefore: '2s',
  noTimestamp: false
};

const jwt = new TokenGenerator(TOKEN_SECRET, options);

export default jwt;

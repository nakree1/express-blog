import BaseError from './BaseError';
import { UNAUTHORIZED } from 'http-status-codes';

export default class AuthError extends BaseError {
  constructor(message) {
    super(message);
    this.statusCode = UNAUTHORIZED;
  }
}

import BaseError from './BaseError';
import { BAD_REQUEST } from 'http-status-codes';

export default class ValidationError extends BaseError {
  constructor(errors) {
    super('Received parameters invalid');
    this.statusCode = BAD_REQUEST;
    this.fields = errors;
  }
}

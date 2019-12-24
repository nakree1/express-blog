import BaseError from './BaseError';
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';

export default class StorageError extends BaseError {
  constructor(message) {
    super(message);
    this.statusCode = INTERNAL_SERVER_ERROR;
  }
}

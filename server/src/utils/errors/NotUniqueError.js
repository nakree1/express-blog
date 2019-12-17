import BaseError from './BaseError';
import { BAD_REQUEST } from 'http-status-codes';


export default class NotUniqueError extends BaseError {
  constructor(name) {
    super(`The ${name} already exist`);
    this.statusCode = BAD_REQUEST;
  }
}

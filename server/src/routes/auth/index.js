import { Router } from 'express';
import login from './login';
import signup from './signup';

import validateRequestMiddleware from '../../middlewares/validateRequestMiddleware';
import validateSignup from '../../utils/validation/validateSignup';
import validateLogin from '../../utils/validation/validateLogin';

export default Router()
  .post('/signup', validateRequestMiddleware(validateSignup), signup)
  .post('/login', validateRequestMiddleware(validateLogin), login);

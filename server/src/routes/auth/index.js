import { Router } from 'express';
import login from './login';
import signup from './signup';

import validateRequest from '../../middlewares/validateRequestMiddleware';
import validateSignup from '../../utils/validation/validateSignup';
import validateLogin from '../../utils/validation/validateLogin';

export default Router()
  .post('/signup', validateRequest(validateSignup), signup)
  .post('/login', validateRequest(validateLogin), login);

import { Router } from 'express';
import login from '../controllers/auth/login';
import signup from '../controllers/auth/signup';

import validateRequest from '../middlewares/validateRequest';
import validateSignup from '../utils/validation/validateSignup';
import validateLogin from '../utils/validation/validateLogin';

export default Router()
  .post('/sign_up', validateRequest(validateSignup), signup)
  .post('/login', validateRequest(validateLogin), login);

import { Router } from 'express';
import login from './login';
import signup from './signup';

import validateRequest from '../../middlewares/validateRequest';
import validateSignup from '../../utils/validation/validateSignup';
import validateLogin from '../../utils/validation/validateLogin';
import ensureAuth from '../../middlewares/ensureAuth';

export default Router()
  .post('/signup', validateRequest(validateSignup), signup)
  .get('/test', ensureAuth, (req, res) => res.send(req.context.currentUser))
  .post('/login', validateRequest(validateLogin), login);

console.dir(Router()
  .post('/signup', validateRequest(validateSignup), signup)
  .get('/test', ensureAuth, (req, res) => res.send(req.context.currentUser))
  .post('/login', validateRequest(validateLogin), login))

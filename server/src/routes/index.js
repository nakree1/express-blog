import { Router } from 'express';
import auth from './auth';

export default Router().use('/auth', auth);

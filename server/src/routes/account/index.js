import { Router } from 'express';

import ensureAuth from '../../middlewares/ensureAuth';
import profile from './profile';

export default Router().get('/profile', ensureAuth, profile);

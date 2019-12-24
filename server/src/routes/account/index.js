import { Router } from 'express';

import ensureAuthMiddleware from '../../middlewares/ensureAuthMiddleware';
import filesMiddleware from '../../middlewares/filesMiddleware';

import uploadAvatar from './uploadAvatar';

import getProfile from './profile/getProfile';
import patchProfile from './profile/patchProfile';
import deleteProfile from './profile/deleteProfile';


export default Router()
  .get('/profile', ensureAuthMiddleware, getProfile)
  .patch('/profile', ensureAuthMiddleware, patchProfile)
  .delete('/profile', ensureAuthMiddleware, deleteProfile)
  .put('/upload-avatar', ensureAuthMiddleware, filesMiddleware() ,uploadAvatar)

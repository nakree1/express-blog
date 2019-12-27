import { Router } from 'express';

import ensureAuthMiddleware from '../../middlewares/ensureAuthMiddleware';
import filesMiddleware from '../../middlewares/filesMiddleware';
import validateRequestMiddleware from '../../middlewares/validateRequestMiddleware';

import validateChangePassword from '../../utils/validation/validateChangePassword';
import validateChangeEmail from '../../utils/validation/validateChangeEmail';

import uploadAvatar from './uploadAvatar';
import changePassword from './changePassword';
import changeEmail from './changeEmail';

import getProfile from './profile/getProfile';
import patchProfile from './profile/patchProfile';
import deleteProfile from './profile/deleteProfile';

export default Router()
  .get('/profile', ensureAuthMiddleware, getProfile)
  .patch('/profile', ensureAuthMiddleware, patchProfile)
  .delete('/profile', ensureAuthMiddleware, deleteProfile)
  .put('/upload-avatar', ensureAuthMiddleware, filesMiddleware() ,uploadAvatar)
  .put('/change-password', ensureAuthMiddleware, validateRequestMiddleware(validateChangePassword), changePassword)
  .put('/change-email', ensureAuthMiddleware, validateRequestMiddleware(validateChangeEmail), changeEmail)

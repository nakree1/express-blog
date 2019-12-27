import createRequestRoutine from '../helpers/createRequestRoutine';
import createTriggerRoutine from '../helpers/createTriggerRoutine';

const prefix = 'settings';
const createRequestBound = createRequestRoutine.bind(null, prefix);
const createTriggerBound = createTriggerRoutine.bind(null, prefix);

export const pushProfileUpdate = createRequestBound('PROFILE_UPDATE_PUSH');
export const saveProfileField = createTriggerBound('PROFILE_FIELD_SAVE');

export const pushChangePassword = createRequestBound('PROFILE_CHANGE_PASSWORD_PUSH');
export const saveChangePasswordField = createTriggerBound('PROFILE_CHANGE_PASSWORD_FIELD_SAVE');

export const pushChangeEmail = createRequestBound('PROFILE_CHANGE_EMAIL_PUSH');
export const saveChangeEmailField = createTriggerBound('PROFILE_CHANGE_EMAIL_FIELD_SAVE');

export const pushDeleteProfile = createRequestBound('PROFILE_DELETE_PUSH');

export const clearAll = createTriggerBound('PROFILE_CLEAR_ALL');

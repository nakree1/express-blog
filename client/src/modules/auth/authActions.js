import createRequestRoutine from '../helpers/createRequestRoutine';
import createTriggerRoutine from '../helpers/createTriggerRoutine';

const prefix = 'signup';
const createRequestBound = createRequestRoutine.bind(null, prefix);
const createTriggerBound = createTriggerRoutine.bind(null, prefix);

export const pushSignUp = createRequestBound('SIGNUP_PUSH');
export const saveSignUpField = createTriggerBound('SIGNUP_FIELD_SAVE');

export const pushLogin = createRequestBound('LOGIN_PUSH');
export const pushLoginByToken = createRequestBound('LOGIN_BY_TOKEN_PUSH');
export const saveLoginField = createTriggerBound('LOGIN_FIELD_SAVE');

export const pushLogout = createRequestBound('LOGOUT_PUSH');

export const clearAll = createTriggerBound('SIGNUP_CLEAR_ALL');

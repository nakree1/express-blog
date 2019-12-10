import createRequestRoutine from '../helpers/createRequestRoutine';

const prefix = 'signup';
const createRequestBound = createRequestRoutine.bind(null, prefix);

export const pushSignUp = createRequestBound('SIGNUP_PUSH');

import { put, call, takeLatest, all, select } from 'redux-saga/effects';

import AuthService from '../../services/AuthService';
import { signUpSelectors } from './signUpSelectors';
import { pushSignUp } from './signUpActions';
import validateSignup from '../../utils/validation/validateSignup';
import Notification from '../../services/notifications';

function* signupWorker() {
  try {
    yield put(pushSignUp.request());

    const input = yield select(signUpSelectors.getInput);

    const { isValid, errors } = validateSignup(input);

    if (isValid) {
      yield call(AuthService.signUp, input);
      yield put(pushSignUp.success());
      Notification.success('Your account have been created');
    } else {
      yield put(pushSignUp.failure(errors));
    }
  } catch (err) {
    Notification.error(err);
    yield put(pushSignUp.failure());
  }
}

export function* signupWatcher() {
  yield all([takeLatest(pushSignUp.TRIGGER, signupWorker)]);
}

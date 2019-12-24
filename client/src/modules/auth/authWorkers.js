import { put, call, takeLatest, all, select } from 'redux-saga/effects';

import AuthService from '../../services/AuthService';
import { authSelectors } from './authSelectors';
import { pushLogin, pushSignUp, pushLogout, pushLoginByToken } from './authActions';
import validateSignup from '../../utils/validation/validateSignup';
import Notification from '../../services/notifications';
import validateLogin from '../../utils/validation/validateLogin';
import { getAccessToken, removeTokens, setAccessToken, setAuthHeader } from '../../services/api';
import UserService from '../../services/UserService';

function* logoutWorker() {
  removeTokens();
}

function* signupWorker() {
  try {
    yield put(pushSignUp.request());

    const { input } = yield select(authSelectors.getSingUp);

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

function* loginWorker() {
  try {
    yield put(pushLogin.request());

    const { input } = yield select(authSelectors.getLogin);

    const { isValid, errors } = validateLogin(input);

    if (isValid) {
      const { token, user } = yield call(AuthService.login, input);
      setAccessToken(token);
      yield put(pushLogin.success(user));
    } else {
      yield put(pushLogin.failure(errors));
    }
  } catch (err) {
    Notification.error(err);
    yield put(pushLogin.failure());
  }
}

function* loginByTokenWorker() {
  const token = getAccessToken();

  if (token) {
    try {
      yield put(pushLogin.request());

      setAuthHeader(token);

      const user = yield call(UserService.getProfile);
      yield put(pushLogin.success(user));
    } catch (err) {
      removeTokens();
      yield put(pushLogin.failure());
    }
  }
}

export function* signupWatcher() {
  yield all([
    takeLatest(pushSignUp.TRIGGER, signupWorker),
    takeLatest(pushLogin.TRIGGER, loginWorker),
    takeLatest(pushLoginByToken.TRIGGER, loginByTokenWorker),
    takeLatest(pushLogout.TRIGGER, logoutWorker)
  ]);
}

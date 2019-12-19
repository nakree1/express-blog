import { all, fork } from 'redux-saga/effects';

import { signupWatcher } from './modules/auth/authWorkers';

export default function* rootSaga() {
  yield all([fork(signupWatcher)]);
}

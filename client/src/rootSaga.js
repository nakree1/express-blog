import { all, fork } from 'redux-saga/effects';

import { signupWatcher } from './modules/signUp/signUpWorkers';

export default function* rootSaga() {
  yield all([fork(signupWatcher)]);
}

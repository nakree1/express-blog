import { all, fork } from 'redux-saga/effects';

import { signupWatcher } from './modules/auth/authWorkers';
import { settingsWatcher } from './modules/settings/settingsWorkers';

export default function* rootSaga() {
  yield all([fork(signupWatcher), fork(settingsWatcher)]);
}

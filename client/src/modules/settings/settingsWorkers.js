import { put, call, takeLatest, all, select } from 'redux-saga/effects';

import { settingsSelectors } from './settingsSelectors';
import { pushProfileUpdate } from './settingsActions';
import Notification from '../../services/notifications';
import UserService from '../../services/UserService';
import validateProfileUpdate from '../../utils/validation/validateProfileUpdate';

function* updateProfileWorker({ payload: avatar }) {
  try {
    yield put(pushProfileUpdate.request());

    const { input } = yield select(settingsSelectors.getProfile);

    const inputWithFile = { ...input, avatar };

    const { isValid, errors } = validateProfileUpdate(inputWithFile);

    if (isValid) {
      if (avatar) {
        const data = new window.FormData();

        data.append('file', avatar, avatar.name);

        yield call(UserService.uploadAvatar, data);
      }

      const newProfile = call(UserService.updateProfile, input);

      yield put(pushProfileUpdate.success(newProfile));
      Notification.success('Your account have been updated');
    } else {
      if (errors.avatar) {
        Notification.info(errors.avatar);
      }

      yield put(pushProfileUpdate.failure(errors));
    }
  } catch (err) {
    Notification.error(err);
    yield put(pushProfileUpdate.failure());
  }
}

export function* settingsWatcher() {
  yield all([takeLatest(pushProfileUpdate.TRIGGER, updateProfileWorker)]);
}

import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from './settingsActions';
import { makeStatusWithResetReducer } from '../helpers/reduxHelpers';

const profileInputInitial = {
  firstName: null,
  lastName: null,
  username: null,
  avatar: null
};

const profileInput = handleActions(
  {
    [actions.saveProfileField.TRIGGER](state, { payload }) {
      return { ...state, [payload.field]: payload.value };
    },
    [actions.pushProfileUpdate.FULFILL]() {
      return profileInputInitial;
    },
    [actions.clearAll.TRIGGER]() {
      return profileInputInitial;
    }
  },
  profileInputInitial
);

const profileErrors = handleActions(
  {
    [actions.pushProfileUpdate.FAILURE](state, { payload }) {
      return payload;
    },
    [actions.pushProfileUpdate.FULFILL]() {
      return {};
    },
    [actions.clearAll.TRIGGER]() {
      return {};
    }
  },
  {}
);

const profile = combineReducers({
  status: makeStatusWithResetReducer(actions.pushProfileUpdate, actions.clearAll),
  input: profileInput,
  errors: profileErrors
});

const changePasswordInputInitial = {
  currentPassword: '',
  password: '',
  confirmPassword: ''
};

const changePasswordInput = handleActions(
  {
    [actions.saveChangePasswordField.TRIGGER](state, { payload }) {
      return { ...state, [payload.field]: payload.value };
    },
    [actions.clearAll.TRIGGER]() {
      return changePasswordInputInitial;
    }
  },
  changePasswordInputInitial
);

const changePasswordErrors = handleActions(
  {
    [actions.pushChangePassword.FAILURE](state, { payload }) {
      return payload;
    },
    [actions.clearAll.TRIGGER]() {
      return {};
    }
  },
  {}
);

const changePassword = combineReducers({
  status: makeStatusWithResetReducer(actions.pushChangePassword, actions.clearAll),
  input: changePasswordInput,
  errors: changePasswordErrors
});

const changeEmailInputInitial = {
  password: '',
  email: ''
};

const changeEmailInput = handleActions(
  {
    [actions.saveChangePasswordField.TRIGGER](state, { payload }) {
      return { ...state, [payload.field]: payload.value };
    },
    [actions.clearAll.TRIGGER]() {
      return changeEmailInputInitial;
    }
  },
  changeEmailInputInitial
);

const changeEmailErrors = handleActions(
  {
    [actions.pushChangeEmail.FAILURE](state, { payload }) {
      return payload;
    },
    [actions.clearAll.TRIGGER]() {
      return {};
    }
  },
  {}
);

const changeEmail = combineReducers({
  status: makeStatusWithResetReducer(actions.pushChangeEmail, actions.clearAll),
  input: changeEmailInput,
  errors: changeEmailErrors
});

export const settings = combineReducers({
  profile,
  changePassword,
  changeEmail
});

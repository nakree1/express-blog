import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from './authActions';
import { makeStatusWithResetReducer } from '../helpers/reduxHelpers';

const signUpInputInitial = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const signUpInput = handleActions(
  {
    [actions.saveSignUpField.TRIGGER](state, { payload }) {
      return { ...state, [payload.field]: payload.value };
    },
    [actions.clearAll.TRIGGER]() {
      return signUpInputInitial;
    }
  },
  signUpInputInitial
);

const signUpErrors = handleActions(
  {
    [actions.pushSignUp.FAILURE](state, { payload }) {
      return payload;
    },
    [actions.clearAll.TRIGGER]() {
      return {};
    }
  },
  {}
);

const loginInputInitial = {
  email: '',
  password: ''
};

const signUp = combineReducers({
  status: makeStatusWithResetReducer(actions.pushSignUp, actions.clearAll),
  input: signUpInput,
  errors: signUpErrors
});

const loginInput = handleActions(
  {
    [actions.saveLoginField.TRIGGER](state, { payload }) {
      return { ...state, [payload.field]: payload.value };
    },
    [actions.clearAll.TRIGGER]() {
      return loginInputInitial;
    }
  },
  loginInputInitial
);

const loginErrors = handleActions(
  {
    [actions.pushLogin.FAILURE](state, { payload }) {
      return payload;
    },
    [actions.clearAll.TRIGGER]() {
      return {};
    }
  },
  {}
);

const login = combineReducers({
  status: makeStatusWithResetReducer(actions.pushLogin, actions.clearAll),
  input: loginInput,
  errors: loginErrors
});

const isAuth = handleActions(
  {
    [actions.pushLogin.SUCCESS]() {
      return true;
    }
  },
  false
);

const profile = handleActions(
  {
    [actions.pushLogin.SUCCESS](state, { payload }) {
      return payload;
    }
  },
  null
);

export const auth = combineReducers({
  isAuth,
  profile,

  signUp,
  login
});

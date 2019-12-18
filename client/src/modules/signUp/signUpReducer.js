import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from './signUpActions';
import { makeStatusReducer } from '../helpers/reduxHelpers';

const inputInitial = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const input = handleActions(
  {
    [actions.saveSignUpField.TRIGGER](state, { payload }) {
      return { ...state, [payload.field]: payload.value };
    },
    [actions.clearAll.TRIGGER]() {
      return inputInitial;
    }
  },
  inputInitial
);

const errors = handleActions(
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

export const signUp = combineReducers({
  status: makeStatusReducer(actions.pushSignUp, actions.clearAll),
  input,
  errors
});

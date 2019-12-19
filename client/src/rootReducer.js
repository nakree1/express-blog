import { combineReducers } from 'redux';
import { auth } from './modules/auth/authReducer';
import { pushLogout } from './modules/auth/authActions';

const appReducer = combineReducers({
  auth
});

export default (state, action) => {
  if (action.type === pushLogout.TRIGGER) {
    state = undefined;
  }

  return appReducer(state, action);
};

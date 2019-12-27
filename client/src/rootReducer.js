import { combineReducers } from 'redux';
import { auth } from './modules/auth/authReducer';
import { settings } from './modules/settings/settingsReducer';
import { pushLogout } from './modules/auth/authActions';
import { pushDeleteProfile } from './modules/settings/settingsActions';

const appReducer = combineReducers({
  auth,
  settings
});

export default (state, action) => {
  console.log(action);
  if (action.type === pushLogout.TRIGGER || action.type === pushDeleteProfile.TRIGGER) {
    state = undefined;
  }

  return appReducer(state, action);
};

import { combineReducers } from 'redux';
import { signUp } from './modules/signUp/signUpReducer';

const appReducer = combineReducers({
  signUp
});

export default (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

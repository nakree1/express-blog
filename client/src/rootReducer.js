import { combineReducers } from 'redux';

const appReducer = combineReducers({});

export default (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

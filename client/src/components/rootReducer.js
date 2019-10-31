import { combineReducers } from 'redux';

const appReducer = combineReducers({});

export default (state, action) => {
  // if (action.type === pushLogout.SUCCESS) {
  //   state = undefined;
  // }

  return appReducer(state, action);
};

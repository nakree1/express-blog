import { handleActions } from 'redux-actions';
import { FAILURE, NONE, REQUEST, SUCCESS } from '../../config/constants';

export function toggleItemInArray(state, payload) {
  const clonedState = [...state];

  if (clonedState.includes(payload)) {
    return clonedState.filter((item) => item !== payload);
  } else {
    return [...clonedState, payload];
  }
}

export function makeStatusReducer(action) {
  return handleActions(
    {
      [action.REQUEST]() {
        return REQUEST;
      },
      [action.SUCCESS]() {
        return SUCCESS;
      },
      [action.FAILURE]() {
        return FAILURE;
      },
      [action.FULFILL]() {
        return NONE;
      }
    },
    NONE
  );
}

export function makeStatusWithResetReducer(action, resetAction) {
  return handleActions(
    {
      [action.REQUEST]() {
        return REQUEST;
      },
      [action.SUCCESS]() {
        return SUCCESS;
      },
      [action.FAILURE]() {
        return FAILURE;
      },
      [action.FULFILL]() {
        return NONE;
      }
    },
    NONE
  );
}

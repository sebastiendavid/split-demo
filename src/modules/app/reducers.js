import { combineReducers } from 'redux';

function noopReducer(state = { foo: 'bar' }, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default function createReducer(asyncReducers = {}) {
  return combineReducers({
    noop: noopReducer,
    ...asyncReducers,
  });
}

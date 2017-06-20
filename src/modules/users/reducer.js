import {
  USERS_FETCH,
  USERS_FETCH_SUCCEED,
  USERS_FETCH_ERROR,
  USERS_FETCH_CANCEL,
} from './events';

export const key = 'users';

const initialState = {
  list: [],
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USERS_FETCH:
      return { ...state, loading: true };
    case USERS_FETCH_SUCCEED:
      return { ...state, list: action.payload, loading: false };
    case USERS_FETCH_ERROR:
    case USERS_FETCH_CANCEL:
      return { ...state, loading: false };
    default:
      return state;
  }
}

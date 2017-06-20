import {
  USERS_FETCH,
  USERS_FETCH_SUCCEED,
  USERS_FETCH_ERROR,
  USERS_FETCH_CANCEL,
} from './events';

export const fetchUsers = () => ({ type: USERS_FETCH });
export const fetchUsersSucceed = payload => ({
  type: USERS_FETCH_SUCCEED,
  payload,
});
export const fetchUsersError = payload => ({
  type: USERS_FETCH_ERROR,
  payload,
});
export const cancelFetchUsers = () => ({ type: USERS_FETCH_CANCEL });

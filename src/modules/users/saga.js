import { delay } from 'redux-saga';
import { call, put, fork, take, cancel, cancelled } from 'redux-saga/effects';
import * as log from '../../utils/log';
import * as api from './api';
import { fetchUsersSucceed, fetchUsersError } from './actions';
import { USERS_FETCH, USERS_FETCH_CANCEL } from './events';

export const key = 'users';

function* fetchUsers() {
  try {
    const { users, error } = yield call(api.fetchUsers);
    yield call(delay, 2000);
    if (error) {
      yield call(log.error, error);
      yield put(fetchUsersError(error));
    } else {
      yield put(fetchUsersSucceed(users));
    }
  } finally {
    if (yield cancelled()) {
      yield call(log.warn, 'fetchUsers has been cancelled');
    }
  }
}

export default function* usersSaga() {
  while (yield take(USERS_FETCH)) {
    const fetchUsersTask = yield fork(fetchUsers);
    yield take(USERS_FETCH_CANCEL);
    yield cancel(fetchUsersTask);
  }
}

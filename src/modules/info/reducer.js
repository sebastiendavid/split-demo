import { INFO_RECEIVED } from './actions';

export const key = 'info';

const initialState = '';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INFO_RECEIVED:
      return action.payload;
    default:
      return state;
  }
}

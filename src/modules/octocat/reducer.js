import { OCTOCAT_RESET, OCTOCAT_MESSAGE } from './actions';

export const key = 'octocat';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case OCTOCAT_RESET:
      return initialState;
    case OCTOCAT_MESSAGE:
      return { ...state, message: action.message };
    default:
      return state;
  }
}

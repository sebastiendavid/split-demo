import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createReducer from './reducers';

function devTools() {
  // eslint-disable-next-line no-underscore-dangle
  const rde = global.__REDUX_DEVTOOLS_EXTENSION__;
  return typeof rde === 'function' ? rde() : compose;
}

export default function configureStore(initialState = {}) {
  const reducers = createReducer();
  const middlewares = compose(applyMiddleware(thunk), devTools());
  const store = createStore(reducers, initialState, middlewares);
  store.asyncReducers = {};
  return store;
}

export function injectAsyncReducer(store, name, asyncReducer) {
  if (name in store.asyncReducers) return;
  Object.assign(store.asyncReducers, {
    [name]: (state, action) => {
      let newState = state;
      if (action.type === 'RESET_ASYNC_REDUCER' && action.payload === name) {
        newState = undefined;
      }
      return asyncReducer(newState, action);
    },
  });
  store.replaceReducer(createReducer(store.asyncReducers));
}

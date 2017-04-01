import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createReducer from './reducers';

function devTools() {
  // eslint-disable-next-line
  const rde = global.__REDUX_DEVTOOLS_EXTENSION__;
  return typeof rde === 'function' ? rde() : compose;
}

export default function configureStore(initialState = {}) {
  const store = createStore(
    createReducer(),
    initialState,
    compose(
      applyMiddleware(thunk),
      devTools(),
    ),
  );
  store.asyncReducers = {};
  return store;
}

export function injectAsyncReducer(store, name, asyncReducer) {
  Object.assign(store.asyncReducers, { [name]: asyncReducer });
  store.replaceReducer(createReducer(store.asyncReducers));
}

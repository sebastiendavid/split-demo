import { injectAsyncReducer } from './store';

export default function createRoutes(store) {
  function loadRoute({ component, reducer, reducerKey }) {
    injectAsyncReducer(store, reducerKey, reducer);
    return component;
  }
  return {
    home: {
      path: '/',
      get() {
        return new Promise((resolve) => {
          require.ensure([], (require) => {
            resolve(loadRoute(require('../modules/home')));
          }, 'home');
        });
      },
    },
    octocat: {
      path: '/octocat',
      get() {
        return new Promise((resolve) => {
          require.ensure([], (require) => {
            resolve(loadRoute(require('../modules/octocat')));
          }, 'octocat');
        });
      },
    },
    info: {
      path: '/info',
      get() {
        return new Promise((resolve) => {
          require.ensure([], (require) => {
            resolve(loadRoute(require('../modules/info')));
          }, 'info');
        });
      },
    },
  };
}

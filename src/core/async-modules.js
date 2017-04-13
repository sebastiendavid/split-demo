import { injectAsyncReducer } from './store';

export default function createRoutes(store) {
  function loadRoute() {
    return ({ component, reducer, reducerKey }) => {
      injectAsyncReducer(store, reducerKey, reducer);
      return component;
    };
  }
  return {
    home() {
      return new Promise((resolve) => {
        require.ensure([], (require) => {
          resolve(loadRoute()(require('../modules/home')));
        }, 'home');
      });
    },
    octocat() {
      return new Promise((resolve) => {
        require.ensure([], (require) => {
          resolve(loadRoute()(require('../modules/octocat')));
        }, 'octocat');
      });
    },
    info() {
      return new Promise((resolve) => {
        require.ensure([], (require) => {
          resolve(loadRoute()(require('../modules/info')));
        }, 'info');
      });
    },
  };
}

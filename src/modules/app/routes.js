import { injectAsyncReducer } from './store';
import Main from './main';

export default function createRoutes(store) {
  function loadRoute(cb) {
    return ({ component, reducer, reducerKey }) => {
      injectAsyncReducer(store, reducerKey, reducer);
      return cb(null, component);
    };
  }
  return {
    component: Main,
    childRoutes: [
      {
        path: '/',
        getComponent(location, cb) {
          require.ensure([], (require) => {
            loadRoute(cb)(require('../home'));
          }, 'home');
        },
      },
      {
        path: '/octocat',
        getComponent(location, cb) {
          require.ensure([], (require) => {
            loadRoute(cb)(require('../octocat'));
          }, 'octocat');
        },
      },
    ],
  };
}

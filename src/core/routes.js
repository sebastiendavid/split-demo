import { injectAsyncReducer } from './store';
import Main from '../modules/main';

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
            loadRoute(cb)(require('../modules/home'));
          }, 'home');
        },
      },
      {
        path: '/octocat',
        getComponent(location, cb) {
          require.ensure([], (require) => {
            loadRoute(cb)(require('../modules/octocat'));
          }, 'octocat');
        },
      },
      {
        path: '/info',
        getComponent(location, cb) {
          require.ensure([], (require) => {
            loadRoute(cb)(require('../modules/info'));
          }, 'info');
        },
      },
    ],
  };
}

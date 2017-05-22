import { injectAsyncReducer } from './store';

export default function createRoutes(store) {
  function injectModule({ component, reducer, reducerKey }) {
    injectAsyncReducer(store, reducerKey, reducer);
    return component;
  }
  return {
    home: {
      path: '/',
      get: async () =>
        injectModule(
          await import(/* webpackChunkName: "home" */ '../modules/home'),
        ),
    },
    octocat: {
      path: '/octocat',
      get: async () =>
        injectModule(
          await import(/* webpackChunkName: "octocat" */ '../modules/octocat'),
        ),
    },
    info: {
      path: '/info',
      get: async () =>
        injectModule(
          await import(/* webpackChunkName: "info" */ '../modules/info'),
        ),
    },
  };
}

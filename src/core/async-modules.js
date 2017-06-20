import { injectAsyncReducer, injectAsyncSaga } from './store';

export default function createRoutes(store) {
  function injectModule({ component, reducer, reducerKey, sagaKey, saga }) {
    if (sagaKey && saga) injectAsyncSaga(store, sagaKey, saga);
    injectAsyncReducer(store, reducerKey, reducer);
    return { component, reducer, reducerKey };
  }
  return {
    home: async () =>
      injectModule(
        await import(/* webpackChunkName: "home" */ '../modules/home')
      ),
    octocat: async () =>
      injectModule(
        await import(/* webpackChunkName: "octocat" */ '../modules/octocat')
      ),
    info: async () =>
      injectModule(
        await import(/* webpackChunkName: "info" */ '../modules/info')
      ),
    users: async () =>
      injectModule(
        await import(/* webpackChunkName: "users" */ '../modules/users')
      ),
  };
}

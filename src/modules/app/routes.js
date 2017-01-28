import App from './';

function loadRoute(cb) {
  return module => cb(null, module.default);
}

export default {
  component: App,
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

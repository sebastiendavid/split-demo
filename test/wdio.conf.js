const moment = require('moment');

const toMilliseconds = (...args) => moment.duration(...args).asMilliseconds();

exports.config = {
  baseUrl: 'http://localhost:8080',
  specs: [
    'test/specs/*',
  ],
  exclude: [],
  capabilities: [{ browserName: 'chrome' }],
  maxInstances: 1,
  logLevel: 'command',
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: toMilliseconds(1, 'hours'),
    slow: toMilliseconds(10, 'seconds'),
    bail: true,
  },
  waitforTimeout: toMilliseconds(5, 'seconds'),
  implicitTimeout: toMilliseconds(1, 'seconds'),
  reporters: ['spec'],
  services: ['selenium-standalone'],
};

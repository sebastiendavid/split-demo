/* eslint-disable global-require, import/no-dynamic-require */
module.exports = function buildConfig() {
  return require(`./config/${process.env.NODE_ENV || 'development'}.js`)();
};

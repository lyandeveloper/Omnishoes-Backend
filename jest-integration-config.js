const config = require('./jest.config'); // eslint-disable-line @typescript-eslint/no-var-requires

config.testMatch = ['**/*.test.ts'];
module.exports = config;

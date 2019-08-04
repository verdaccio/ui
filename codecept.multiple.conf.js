exports.config = {
  tests: './test/acceptance/*_test.js',
  output: './test/acceptance/output',
  multiple: {
    basic: {
      browsers: ['chrome', { browser: 'firefox' }],
    },
  },
  include: {
    I: './test/acceptance/steps_file.js',
  },
  helpers: {
    WebDriver: {
      url: 'hub.browserstack.com',
      browser: 'Chrome',
      user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
      key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY',
      capabilities: {
        browserName: 'chrome',
        platformName: 'windows',
        // only set this if you're using BrowserStackLocal to test a local domain
        'browserstack.local': true,

        // set this option to tell browserstack to provide addition debugging info
        // "browserstack.debug": true,
      },
    },
  },
  smartWait: 30000,
  bootstrapAll: './codeceptjs/browser_stack_local.bootstrap.js',
  teardownAll: './codeceptjs/browser_stack_local.teardown.js',
  plugins: {},
  mocha: {},
  name: '@verdaccio/ui-theme',
};

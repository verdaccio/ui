exports.config = {
  tests: './test/acceptance/*_test.js',
  output: './test/acceptance/output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8080',
      // "show": true,
      chrome: {
        // headless: false
      },
    },
    WebDriver: {
      url: 'hub.browserstack.com',
      user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
      key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY',
      browser: 'chrome',
      capabilities: {
        browserName: 'chrome',
        // only set this if you're using BrowserStackLocal to test a local domain
        'browserstack.local': true,

        // set this option to tell browserstack to provide addition debugging info
        // "browserstack.debug": true,
      },
    },
  },
  include: {
    I: './test/acceptance/steps_file.js',
  },
  smartWait: 30000,
  bootstrap: 'codeceptjs/browser_stack_local.bootstrap.js',
  teardown: 'codeceptjs/browser_stack_local.teardown.js',
  plugins: {},
  mocha: {},
  name: '@verdaccio/ui-theme',
};

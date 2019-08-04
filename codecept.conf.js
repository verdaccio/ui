exports.config = {
  tests: './test/acceptance/*_test.js',
  output: './test/acceptance/output',
  multiple: {
    basic: {
      browsers: [
        {
          browser: 'safari',
          capabilities: {
            os: 'OS X',
            os_version: 'High Sierra',
            resolution: 'maximize',
            'browserstack.local': true,
          },
        },
        {
          browser: 'safari',
          capabilities: {
            os: 'OS X',
            os_version: 'High Sierra',
            resolution: 'maximize',
            'browserstack.local': true,
          },
        },
      ],
    },
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
  include: {
    I: './test/acceptance/steps_file.js',
  },
  smartWait: 30000,
  bootstrap: './codeceptjs/browser_stack_local.bootstrap.js',
  teardown: './codeceptjs/browser_stack_local.teardown.js',
  plugins: {},
  mocha: {},
  name: '@verdaccio/ui-theme',
};

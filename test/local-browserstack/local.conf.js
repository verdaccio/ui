const browserstack = require('browserstack-local');

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY',

  specs: ['./test/local-browserstack/spec/run.js'],

  capabilities: [
    {
      browser: 'chrome',
      build: 'webdriver-browserstack',
      name: 'Bstack-[WebdriverIO] Local Test',
      'browserstack.local': true,
    },
  ],

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.browserstack.com',

  // Code to start browserstack local before start of test
  onPrepare: async function(config, capabilities) {
    console.log('onPrepare: hook');
    await new Promise(function(resolve, reject) {
      console.log('Connecting local');
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({ key: exports.config.key }, function(error) {
        if (error) return reject(error);
        console.log('Connected. Now testing...');

        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  onComplete: async function(capabilties, specs) {
    console.log('OnComplete: hook');
    await new Promise(resolve => {
      exports.bs_local.stop(function() {
        console.log('Local Stack has been stopped');
        resolve();
      });
    });
  },
};

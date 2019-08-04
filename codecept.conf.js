
exports.config = {
  tests: './test/acceptance/*_test.js',
  output: './test/acceptance/output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8080',
      // "show": true,
      chrome: {
        // headless: false
      }
    }
  },
  include: {
    I: './test/acceptance/steps_file.js'
  },
  smartWait: 30000,
  bootstrap: null,
  plugins: {},
  mocha: {},
  name: '@verdaccio/ui-theme'
}

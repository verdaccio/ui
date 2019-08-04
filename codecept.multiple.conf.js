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
  smartWait: 30000,
  bootstrapAll: './codeceptjs/browser_stack_local.bootstrap.js',
  teardownAll: './codeceptjs/browser_stack_local.teardown.js',
  plugins: {},
  mocha: {},
  name: '@verdaccio/ui-theme',
};

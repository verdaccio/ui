const browserstack = require('browserstack-local');

const key = process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY';

module.exports = function(done) {
  global.bs_local = new browserstack.Local();
  global.bs_local.start({ key }, function(error) {
    if (error) {
      // on error call done('error description') to stop
      done(error);
    }
    console.log('Connected. Now testing...');
    done();
  });
};

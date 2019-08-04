module.exports = function(done) {
  global.bs_local.stop(function() {
    console.log('Local Stack has been stopped');
    done();
  });
};

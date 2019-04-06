const fs = require('fs');
const startServer = require('verdaccio').default;
const yalm = require('js-yaml');

const configJsonFormat = yalm.safeLoad(fs.readFileSync('./tools/_config.yaml', 'utf8'));

const handler = function(webServer, addr, pkgName, pkgVersion) {
  webServer.listen(addr.port || addr.path, addr.host, () => {
    console.log(`${pkgName}:${pkgVersion} running ${addr.proto}://${addr.host}:${addr.port}`);
  });

  process.on('SIGTERM', () => {
    webServer.close(() => {
      console.log('Process terminated')
    })
  })
};

startServer(configJsonFormat, 8080, '', '1.0.0', 'verdaccio', handler);

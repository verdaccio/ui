const fs = require('fs');
const os = require('os');
const path = require('path');

const { green } = require('kleur');
const mkdirp = require('mkdirp');
const puppeteer = require('puppeteer');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

// @ts-ignore : Property '__VERDACCIO_BASENAME_UI_OPTIONS' does not exist on type 'Global'.
global.__VERDACCIO_BASENAME_UI_OPTIONS = {
  base: 'http://localhost',
  protocol: 'http',
  host: 'localhost',
  primaryColor: '#4b5e40',
  url_prefix: '',
  darkMode: false,
  language: 'en-US',
  uri: 'http://localhost:4872',
  title: 'Verdaccio Dev UI',
  scope: '',
  version: 'v1.0.0',
};

module.exports = async function() {
  console.log(green('Setup Puppeteer'));
  const browser = await puppeteer.launch({
    headless: true,
    // slowMo: 600,
    // devtools: true,
    args: ['--no-sandbox'],
  });
  global.__BROWSER__ = browser;
  mkdirp.sync(DIR);
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
};

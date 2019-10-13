const fs = require('fs');
const path = require('path');

const AdmZip = require('adm-zip');
const rimraf = require('rimraf');
const request = require('request');

const CROWDIN_TOKEN_KEY = process.env.CROWDIN;
const translationsZipFile = path.join(__dirname, 'translations.zip');

if (!CROWDIN_TOKEN_KEY) {
  throw new Error('crowdin secret key is mandatory');
}

export async function exportTranslations() {
  const EXPORT_API = `https://api.crowdin.com/api/project/verdaccio/export?key=${CROWDIN_TOKEN_KEY}&json&branch=master&json`;
  return new Promise((resolve, reject) => {
    request(EXPORT_API, function(error, response, body) {
      if (error) {
        console.log('error:', error); // Print the error if one occurred
        return reject(error);
      }

      return resolve(body);
    });
  });
}

export function downloadTranslations() {
  const DOWNLOAD_API = `https://api.crowdin.com/api/project/verdaccio/download/all.zip?key=${CROWDIN_TOKEN_KEY}`;
  rimraf.sync(translationsZipFile);
  const file = fs.createWriteStream(translationsZipFile);
  return new Promise((resolve, reject) => {
    request({
      url: DOWNLOAD_API,
      gzip: true,
    })
      .pipe(file)
      .on('finish', () => {
        resolve();
      })
      .on('error', error => {
        reject(error);
      });
  }).catch(error => {
    console.log(`Something happened: ${error}`);
  });
}

export function unzipTranslations() {
  return new Promise((resolve, reject) => {
    try {
      const DIR = path.join(__dirname, 'translations_unziped');
      rimraf.sync(DIR);
      const zip = new AdmZip(translationsZipFile);
      zip.extractAllTo(DIR, true);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

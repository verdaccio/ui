require('@babel/register')({
  extensions: ['.ts', '.js'],
});

const { downloadTranslations, unzipTranslations } = require('./crowdin');

(async () => {
  try {
    await downloadTranslations();
    await unzipTranslations();
  } catch (error) {
    console.error('translations process has failed:', error);
  }
})();

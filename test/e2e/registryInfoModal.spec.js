const { percySnapshot } = require('@percy/puppeteer');

describe('Registry Info', () => {
  const url = 'http://localhost:55558';
  let page;

  // this might be increased based on the delays included in all test
  jest.setTimeout(20000);

  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();
    await page.goto(url);
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  });

  afterAll(async () => {
    await page.close();
  });

  test('open modal', async () => {
    const registryInfoButton = await page.$('button[data-testid="header--tooltip-info"]');
    await registryInfoButton.click();
    await page.waitFor(1000);
    const registryInfoDialog = await page.$('div[data-testid="registryInfo--dialog"');
    expect(registryInfoDialog).not.toBeNull();

    await percySnapshot(page, 'Registry info modal');
  });

  test('copy npm set registry info to clipboard', async () => {
    const context = await global.__BROWSER__.defaultBrowserContext();
    await context.overridePermissions(url, ['clipboard-read']);

    const tabContent = await page.$('div[data-testid="tab-content"]');
    const copyToClipboardButtons = await tabContent.$$('button[data-testid="copy-icon"]');
    const setCommandButton = copyToClipboardButtons[0];

    await setCommandButton.focus();
    await setCommandButton.click();
    await page.waitFor(1000);

    const copiedText = await page.evaluate(() => navigator.clipboard.readText());
    expect(copiedText).toEqual(`npm set registry ${url}`);
  });
});

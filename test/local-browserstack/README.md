## Browserstack Local Test

This is just a test to prove the browserstack credentials works fine from local testing. 

### Requirements

You need the following credentials as environment variables

- BROWSERSTACK_USERNAME=xxxx
- BROWSERSTACK_ACCESS_KEY=xxxx

> Those credentails are only available for owners

This test uses [https://webdriver.io/](https://webdriver.io/).

> https://github.com/browserstack/webdriverio-browserstack

### Run

```bash
yarn wdio test/local-browserstack/local.conf.js
``` 

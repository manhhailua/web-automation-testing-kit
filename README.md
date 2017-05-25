### Node + Selenium + WebDriverIO + Phantomjs + Mocha + Chai + Sinon

## Tech Stack

Nodejs (v6^) <https://nodejs.org>

Selenium-standalone <https://github.com/vvo/selenium-standalone>

Phantomjs <http://phantomjs.org/>

Webdriverio <https://github.com/webdriverio/webdriverio/>

Mocha <https://mochajs.org/>

Chai <https://chaijs.com>

Sinon <https://sinonjs.org>

## Documentation
The installation instruction below show you how to get this project up and testing. For details, follow [documentation](./docs/README.md).

## Installation

```
yarn install
```

If you have not had `yarn`, please install it:

```
npm install -g yarn
```

##Run Tests

To run tests, run `yarn run test`:

```
yarn run test
yarn run test:chrome
yarn run test:firefox
yarn run test:phantomjs
```

**Note:** `yarn test`, runs all test within the test directory and `chrome` is used by default.
use `yarn run help` to see webdriverio's testrunner commands.

## Author
Manh Pham <manhhailua@gmail.com>

## License
MIT
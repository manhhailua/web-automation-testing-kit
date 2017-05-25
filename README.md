#Selenium + Node + webdriverio + phantomjs + mocha + chai + sinon

-------------
Author: Manh Pham <manhpt2@fsoft.com.vn>


##Tech Stack
-------------
Nodejs (version 6^) <https://nodejs.org>

Selenium-standalone <https://github.com/vvo/selenium-standalone>

Phantomjs <http://phantomjs.org/>

Webdriverio <https://github.com/webdriverio/webdriverio/>

Mocha <https://mochajs.org/>

Chai <https://chaijs.com>

Sinon <https://sinonjs.org>


##Installation
-------------
```
npm install
```

Or use `yarn`

```
npm install -g yarn
yarn install
```

##Run Tests
-------------
To run tests, run `npm run test`:

```
npm run test
npm run test:firefox
npm run test:chrome
```

Or with `yarn`:

```
yarn run test
yarn run test:firefox
yarn run test:chrome
```

**Note:** `npm test`, runs all test within the test directory and `phantomjs` is used by default.
use `npm run help` to see webdriverio's testrunner commands.

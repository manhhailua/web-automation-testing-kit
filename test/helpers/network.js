/**
 * Created by manhpt2 on 5/23/17.
 */

/* eslint-disable import/prefer-default-export */

import phantom from 'phantom';

const measureNetwork = async (
  siteUrl, {
    dataLocalStorage,
    dataSessionStorage,
    dataCookies,
  } = {},
) => {
  const bot = await phantom.create([], { logLevel: 'error' });
  const page = await bot.createPage();
  const responses = [];
  let pageLoadStart = null;
  let pageLoadEnd = null;

  // Declare event handling
  await page.on('onLoadStarted', () => {
    pageLoadStart = new Date();
  });

  await page.on('onLoadFinished', () => {
    pageLoadEnd = new Date();
  });

  await page.on('onResourceReceived', (response) => {
    responses.push(response);
  });

  // Prepare localStorage
  if (dataLocalStorage instanceof Array && dataLocalStorage.length > 0) {
    await page.evaluate(() => {
      dataLocalStorage.forEach((data) => {
        localStorage.setItem(data.key, data.value);
      });
    });
  }

  // Prepare sessionStorage
  if (dataSessionStorage instanceof Array && dataSessionStorage.length > 0) {
    await page.evaluate(() => {
      dataSessionStorage.forEach((data) => {
        sessionStorage.setItem(data.key, data.value);
      });
    });
  }

  // Prepare cookies
  if (dataCookies instanceof Array && dataCookies.length > 0) {
    dataCookies.forEach(cookie => page.addCookie(cookie));
  }

  // Wait for all event declaration to be done before open the page
  await page.open(siteUrl);
  await bot.exit();

  return {
    pageLoadTime: pageLoadEnd - pageLoadStart, // Unit: ms
    responses,
  };
};

export {
  measureNetwork,
};

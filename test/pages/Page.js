/**
 * Created by manhpt2 on 5/25/17.
 */

import url from 'url';
import { ORIGIN } from '../config';

/**
 * This component should always point to the root URL page
 *
 * Be aware of naming convention:
 * - elementXxx : element object returned from browser.element for Xxx
 * - dataXxx : array of localStorage/sessionStorage/cookies/sessions key:value data
 * - doXxx : function to do Xxx action
 * - pageXxx : instance of Class for page Xxx
 * - urlXxx : url of or from Xxx
 *
 * Note:
 * - Use `Object.assign()` to inherit props from super class in constructor
 */
class Page {

  /**
   * Be aware of attribute that is declared as a object
   * In child class constructors, these kind of attribute can be override
   * Use `Object.assign` to inherit attributes from super class
   * - when declaring an existed attribute
   */
  constructor() {
    this.href = {
      origin: ORIGIN,
      pathname: '/',
    };

    this.elements = {
      body: 'body',
    };
  }

  get title() {
    return browser.getTitle();
  }

  get urlBrowser() {
    return browser.getUrl();
  }

  get urlApp() {
    return url.resolve(this.href.origin, this.href.pathname);
  }

  get elementBody() {
    return $(this.elements.body);
  }

  /**
   * Return array of key:value of localStorage
   * @returns {Array}
   */
  get dataLocalStorage() {
    const storage = browser.localStorage().value;

    if (!storage || !(storage instanceof Array)) {
      return [];
    }

    return storage.map(key => ({
      key,
      value: browser.localStorage('GET', key),
    }));
  }

  /**
   * Return array of key:value of sessionStorage
   * @returns {Array}
   */
  get dataSessionStorage() {
    const storage = browser.sessionStorage().value;

    if (!storage || !(storage instanceof Array)) {
      return [];
    }

    return storage.map(key => ({
      key,
      value: browser.sessionStorage('GET', key),
    }));
  }

  /**
   * Return array of cookies
   * @returns {Array}
   */
  get dataCookies() {
    return browser.getCookie();
  }

  /**
   * Open the current page in browser
   */
  open() {
    browser.url(this.urlApp);
  }

  /**
   * Wait for the page is loaded, conditions:
   * - The page url is now on the address bar
   * - The body tag is current visible within the browser viewport
   */
  wait() {
    browser.waitUntil(() => (
        this.urlBrowser.indexOf(this.urlApp) === 0 &&
        this.elementBody.isExisting() &&
        this.elementBody.isVisibleWithinViewport()
      ),
    );
  }

}

export default Page;

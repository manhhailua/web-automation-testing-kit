/**
 * Created by manhpt on 5/25/17.
 */

import { ORIGIN } from '../config';
import { EXPECTED_PAGE_LOAD_TIME, REGEX_ERROR_STATUS } from '../constants';
import { measureNetwork } from '../../src/helpers/network';
import Home from '../../src/pages/Home';

const pageHome = new Home();

describe(`Automation testing for ${ORIGIN} should show that`, () => {
  before(() => {
    // Open page
    pageHome.open();

    // Wait for page to be loaded
    pageHome.wait();
  });

  it('home page can be successfully accessed', () => {
    pageHome.urlBrowser.should.contain('dantri.com.vn');
  });

  it('home page should have correct title', () => {
    pageHome.title.should.be.equal('Báo Dân trí | Tin tức Việt Nam và quốc tế nóng, nhanh, cập nhật 24h');
  });

  it('top ads should be displayed', () => {
    pageHome.elementTopAds.isExisting().should.be.equal(true);
  });

  it('top ads should be visible in browser viewport', () => {
    pageHome.elementTopAds.isVisibleWithinViewport().should.be.equal(true);
  });
});

measureNetwork(pageHome.urlApp).then((measurement) => {
  const { pageLoadTime, responses } = measurement;

  describe('Home Page - Network Measurement should show that', () => {
    it(`home page should be ready within ${EXPECTED_PAGE_LOAD_TIME}ms`, () => {
      pageLoadTime.should.be.below(EXPECTED_PAGE_LOAD_TIME);
    });

    it('home page should be loaded without any error response', () => {
      responses.forEach(response => expect(response.status).to.not.match(REGEX_ERROR_STATUS));
    });
  });
});

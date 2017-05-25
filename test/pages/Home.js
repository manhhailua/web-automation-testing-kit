/**
 * Created by manhpt on 5/25/17.
 */

import Page from './Page';

class Home extends Page {

  constructor() {
    super();

    this.href = Object.assign(this.href, {
      pathname: '/',
    });

    this.elements = Object.assign(this.elements, {
      topAds: 'div.top-ads',
    });
  }

  get elementTopAds() {
    return $(this.elements.topAds);
  }

}

export default Home;

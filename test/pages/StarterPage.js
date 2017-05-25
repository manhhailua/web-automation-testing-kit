/**
 * Created by manhpt2 on 5/25/17.
 */

import Page from './Page';

class StarterPage extends Page {

  constructor() {
    super();

    this.href = Object.assign(this.href, {
      pathname: '/',
    });
  }

}

export default StarterPage;

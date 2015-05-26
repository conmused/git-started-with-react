'use strict';

import React from 'react';
import Page from '../page/';
import store from 'amplify-store';

class Home extends React.Component {
    displayName: 'Home';
    render() {
      store('test','what' );
      return (
        <Page title="Home">
          <div className="page__container">
            <h1 className="heading__page-title">Home</h1>
          </div>
        </Page>
      );
    }
}

export default Home;

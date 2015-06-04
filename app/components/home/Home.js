'use strict';

import React from 'react';
import Page from '../page/';

export default class Home extends React.Component {
    displayName: 'Home';
    render() {
      return (
        <Page title="Home">
          <div className="page__container">
            <h1 className="heading__page-title">Home</h1>
          </div>
        </Page>
      );
    }
}
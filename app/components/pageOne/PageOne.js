'use strict';

import React from 'react';
import Page from '../page/';

class PageOne extends React.Component {
    displayName: 'pageOne';
    render () {
        return (
          <Page title="Page One">
            <div className="page__container">
              <h1 className="heading__page-title">Page One</h1>
            </div>
          </Page>
        );
    }
}

export default PageOne;
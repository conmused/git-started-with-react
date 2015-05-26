'use strict';

import React from 'react';
import Page from '../page/';

class PageTwo extends React.Component {
    displayName: 'pageTwo';
    render() {
        return (
          <Page title="Page Two">
            <div className="page__container">
              <h1 className="heading__page-title">Page Two</h1>
            </div>
          </Page>
        );
    }
}

export default PageTwo;
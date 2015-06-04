'use strict';

import React from 'react';
import Page from '../page/';
import pageStyles from '../page/page.css';
import type from '../global/typography.css';

export default class PageOne extends React.Component {
    displayName: 'pageOne';
    render () {
        return (
          <Page title="Page One">
            <div className={pageStyles.container}>
              <h1 className={type.pageTitle}>Page One</h1>
            </div>
          </Page>
        );
    }
}
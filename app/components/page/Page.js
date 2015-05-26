'use strict';
import React from 'react';
import DocumentTitle from 'react-document-title';

import './page.scss';

class Page extends React.Component {
  render(){
    return(
      <DocumentTitle title={this.props.title + (this.props.footer || " | React Seed")}>
        <div className="page">
          {this.props.children}
        </div>
      </DocumentTitle>
      );
  }
}

export default Page;
'use strict';

import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import Navigation from '../navigation/';
import { RouteHandler } from 'react-router';

import './normalize.scss';
import './app.scss';

class App extends React.Component{
    render() {

        return (
          <div>
            <Navigation/>
            <ReactCSSTransitionGroup transitionName="route">
              <RouteHandler/>
            </ReactCSSTransitionGroup>
          </div>
        );
    }
}

export default App;

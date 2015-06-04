'use strict';
import './normalize.css';
import './app.css';

import React from 'react';
import Navigation from '../navigation/';
import { RouteHandler } from 'react-router';


class App extends React.Component{
    render() {

        return (
          <div>
            <Navigation/>
            <RouteHandler/>
          </div>
        );
    }
}

export default App;

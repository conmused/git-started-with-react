'use strict';
import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

//Components
var App = require('./components/app/');
var Home = require('./components/home/');
var PageOne =  require('./components/pageOne/');
var PageTwo = require('./components/pageTwo/');

export default (
      <Route handler={ App } path="/" >
        <DefaultRoute handler={ Home } />
        <Route path="/pageone" handler={ PageOne } />
        <Route path="/pagetwo" handler={ PageTwo } />
        <NotFoundRoute handler={ Home } />
      </Route>
    );
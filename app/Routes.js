'use strict';
import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

//Components
var App = require('./components/app/');
var Home = require('react-proxy!./components/home/');
var PageOne =  require('react-proxy!./components/pageOne/');
var PageTwo = require('react-proxy!./components/pageTwo/');

export default (
      <Route handler={ App } path="/">
        <DefaultRoute name="home" handler={ Home } />
        <Route name="pageone" handler={ PageOne } />
        <Route name="pagetwo" handler={ PageTwo } />
        <NotFoundRoute handler={ Home } />
      </Route>
    );
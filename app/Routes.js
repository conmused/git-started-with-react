'use strict';
import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

//Components
import App from './components/app/';
import Home from './components/home/';
import PageOne from './components/pageOne/';
import PageTwo from './components/pageTwo/';


export default (
      <Route handler={ App } path="/">
        <DefaultRoute name="home" handler={ Home } />
        <Route name="pageone" handler={ PageOne } />
        <Route name="pagetwo" handler={ PageTwo } />
        <NotFoundRoute handler={ Home } />
      </Route>
    );
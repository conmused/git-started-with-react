'use strict';
import React from 'react';
import Router from 'react-router';
import Routes from './Routes';
import FullPage from './components/fullPage/';
import stats from './stats.json';

const preRenderString = function() {
  let prerender = null;
  Router.run(Routes, '/home', function (Handler) {
    const markup = React.renderToString(<Handler />);
    const html   = React.renderToStaticMarkup(<FullPage markup={markup} hash={stats.hash} />);
    prerender = '<!DOCTYPE html>' + html;
    });
  return prerender;
};


module.exports = preRenderString();


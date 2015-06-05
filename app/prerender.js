'use strict';
import React from 'react';
import Router from 'react-router';
import Routes from './Routes';
import FullPage from './components/fullPage/';
//prerender stats, to fetch production hash (cache busting).
//TODO: make this file smaller. Only need the hash.
import stats from './stats.json';

//override server side loader, render to string
const css = require('!!css-loader!../dist/assets/' + stats.hash + '.app.css').toString();
const preRenderString = function() {
  let prerender = null;
  Router.run(Routes, '/', function (Handler) {
    const markup = React.renderToString(<Handler />);
    const html   = React.renderToStaticMarkup(<FullPage markup={markup} css={css} hash={stats.hash} />);
    prerender = '<!DOCTYPE html>' + html;
    });
  return prerender;
};


module.exports = preRenderString();


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
      var markup = React.renderToString(<Handler/>)//.replace(/href=\"/g,'href=\"#');
      prerender = '<!DOCTYPE html>' +  React.renderToStaticMarkup(<FullPage markup={markup} css={css} hash={stats.hash} />);
  });
  return prerender;
};


module.exports = preRenderString();


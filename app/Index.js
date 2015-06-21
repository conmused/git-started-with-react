'use strict';
import React  from 'react';
import Router from 'react-router';
import Routes from './Routes';


document.addEventListener("DOMContentLoaded", function() {
  Router.run(Routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
  });
});

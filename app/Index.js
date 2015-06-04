'use strict';
import React  from 'react';
import Router from 'react-router';
import Routes from './Routes';


document.addEventListener("DOMContentLoaded", function() {
  Router.run(Routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
  });
});

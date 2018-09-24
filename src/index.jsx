'use strict';

import * as React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import Navbar from './components/Navbar.jsx';
import HomePage from './components/HomePage.jsx';
import Visualization from './components/Visualization.jsx';
import Prototype from './components/Prototype.jsx';
import Development from './components/Development.jsx';
import { Router, Switch, Route } from 'react-router';

import './scss/main.scss';

const browserHistory = createBrowserHistory();

render(
  <Router history={browserHistory}>
    <Switch>
      <Navbar/>
      <Route exact path='/' component={HomePage}/>
      <Route path='/visualizations' component={Visualization}/>
      <Route path='/prototypes' component={Prototype}/>
      <Route path='/development' component={Development}/>
    </Switch>
  </Router>,
  document.getElementById('react-src')
);
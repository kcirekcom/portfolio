'use strict';

import * as React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import HomePage from './components/HomePage.jsx';
import Visualization from './components/Visualization.jsx';
import Prototype from './components/Prototype.jsx';
import Development from './components/Development.jsx';
import { Switch, Route } from 'react-router';

import './scss/main.scss';

const browserHistory = createBrowserHistory();

render(
  <Switch history={browserHistory}>
    <Route exact path='/' component={HomePage}/>
    <Route path='/visualizations' component={Visualization}/>
    <Route path='/prototypes' component={Prototype}/>
    <Route path='/development' component={Development}/>
  </Switch>,
  document.getElementById('react-src')
);
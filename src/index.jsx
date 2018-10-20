'use strict';

import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './components/Loader.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

const AsyncHome = Loadable({
  loader: () => import('./components/Home.jsx'),
  loading: Loader
});

const AsyncVisualization = Loadable({
  loader: () => import('./components/Visualization.jsx'),
  loading: Loader
});

const AsyncPrototype = Loadable({
  loader: () => import('./components/Prototype.jsx'),
  loading: Loader
});

const AsyncDevelopment = Loadable({
  loader: () => import('./components/Development.jsx'),
  loading: Loader
});

import './scss/main.scss';

render(
  <Router>
    <ScrollToTop>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={AsyncHome}/>
        <Route exact path='/visualizations' component={AsyncVisualization}/>
        <Route exact path='/prototypes' component={AsyncPrototype}/>
        <Route exact path='/development' component={AsyncDevelopment}/>
      </Switch>
    </ScrollToTop>
  </Router>,
  document.getElementById('react-src')
);
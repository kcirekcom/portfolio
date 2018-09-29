'use strict';

import * as React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Visualization from './components/Visualization.jsx';
import Prototype from './components/Prototype.jsx';
// import Development from './components/Development.jsx';
// import { Switch, Route } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './scss/main.scss';

// const browserHistory = createBrowserHistory();

render(
  <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/visualizations' component={Visualization}/>
        <Route exact path='/prototypes' component={Prototype}/>
        {/* <Route path='/development' component={Development}/> */}
      </Switch>
    </div>
  </Router>,
  document.getElementById('react-src')
);
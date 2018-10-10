'use strict';

import * as React from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Visualization from './components/Visualization.jsx';
import Prototype from './components/Prototype.jsx';
import Development from './components/Development.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './scss/main.scss';

render(
  <Router>
    <div>
      <Navbar/>
      <Switch>
        <main>
          <Route exact path='/' component={Home}/>
          <Route exact path='/visualizations' component={Visualization}/>
          <Route exact path='/prototypes' component={Prototype}/>
          <Route exact path='/development' component={Development}/>
        </main>
      </Switch>
    </div>
  </Router>,
  document.getElementById('react-src')
);
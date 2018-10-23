'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './components/Loader.jsx';
import CustomizeBackground from './components/CustomizeBackground.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import './scss/main.scss';

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

class App extends Component {
  render() {
    return(
      <Router>
        <CustomizeBackground>
          <Navbar/>
          <ScrollToTop>
            <Switch>
              <Route exact path='/' component={AsyncHome}/>
              <Route exact path='/visualizations' component={AsyncVisualization}/>
              <Route exact path='/prototypes' component={AsyncPrototype}/>
              <Route exact path='/development' component={AsyncDevelopment}/>
            </Switch>
          </ScrollToTop>
          <Footer/>
        </CustomizeBackground>
      </Router>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('react-src')
);
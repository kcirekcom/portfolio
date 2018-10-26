'use strict';

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './Loader.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';

const AsyncHome = Loadable({
  loader: () => import('./Home.jsx'),
  loading: Loader
});

const AsyncVisualization = Loadable({
  loader: () => import('./Visualization.jsx'),
  loading: Loader
});

const AsyncPrototype = Loadable({
  loader: () => import('./Prototype.jsx'),
  loading: Loader
});

const AsyncDevelopment = Loadable({
  loader: () => import('./Development.jsx'),
  loading: Loader
});

export default class CustomizeBackground extends Component {
  constructor() {
    super();
    this.state = {
      background: 'background--first',
      hidden: true
    }
  }

  componentDidMount() {
    let choice = localStorage.getItem('background');
    if (choice !== null) {
      this.setState({ background: choice });
    }
  }

  showWidget = (event) => {
    if (event.key == 'Enter' || event.type == 'click') {
      this.setState({ hidden: !this.state.hidden })
    }
  }

  selectBackground = (event) => {
    event.persist();
    let value = event.target.attributes.value.value;
    if (event.key == 'Enter' || event.type == 'click') {
      switch (value) {
        case 'second':
          localStorage.setItem('background', 'background--second');
          this.setState({ background: 'background--second' });
          break;
        case 'third':
          localStorage.setItem('background', 'background--third');
          this.setState({ background: 'background--third' });
          break;
        default:
          localStorage.setItem('background', 'background--first');
          this.setState({ background: 'background--first' });
      }
    }
  }

  render() {
    return(
      <div className={`background ${this.state.background}`}>
        <Navbar {...this.state}/>
        <ScrollToTop>
          <Switch>
            <Route exact path='/' component={AsyncHome}/>
            <Route exact path='/visualizations' component={AsyncVisualization}/>
            <Route exact path='/prototypes' component={AsyncPrototype}/>
            <Route exact path='/development' component={AsyncDevelopment}/>
          </Switch>
        </ScrollToTop>

        <div className='background-widget' aria-hidden='true'>
          <div className={`background-widget__label ${this.state.hidden === false ? 'background-widget__label--expanded': ''}`} onClick={this.showWidget} onKeyUp={this.showWidget} tabIndex='0'><div className='icon-stack'/></div>
          <div className='background-widget__selector'>
            <span className={`background-widget__card ${this.state.hidden === false ? 'background-widget__card--visible': ''}`} value='first' onClick={this.selectBackground} onKeyUp={this.selectBackground} tabIndex='0'/>
            <span className={`background-widget__card ${this.state.hidden === false ? 'background-widget__card--visible': ''}`} value='second' onClick={this.selectBackground} onKeyUp={this.selectBackground} tabIndex='0'/>
            <span className={`background-widget__card ${this.state.hidden === false ? 'background-widget__card--visible': ''}`} value='third' onClick={this.selectBackground} onKeyUp={this.selectBackground} tabIndex='0'/>
          </div>
        </div>

        <Footer/>
      </div>
    )
  }
}
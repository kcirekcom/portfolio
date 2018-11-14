'use strict';

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './Loader.jsx';
import Navbar from './Navbar.jsx';

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
    let selection = localStorage.getItem('background');
    if (selection !== null) {
      this.setState({ background: selection });
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
        <Switch>
          <Route exact path='/' component={AsyncHome}/>
          <Route exact path='/visualizations' component={AsyncVisualization}/>
          <Route exact path='/prototypes' component={AsyncPrototype}/>
          <Route exact path='/development' component={AsyncDevelopment}/>
        </Switch>
        <div className='background-widget' aria-label={`Background selector of site with 3 options: ${this.state.background} option currently selected`}>
          <div className={`background-widget__label ${this.state.hidden === false ? 'background-widget__label--expanded': ''}`} onClick={this.showWidget} onKeyUp={this.showWidget} tabIndex='0'><div className='icon-stack'/></div>
          <div className='background-widget__selector'>
            <span className={`background-widget__card ${this.state.hidden === false ? 'background-widget__card--visible': ''}`} aria-label='Option 1: Triangulated SVG background pattern with a light orange to magenta to white gradient overlay that spans from top left to bottom right' value='first' onClick={this.selectBackground} onKeyUp={this.selectBackground} tabIndex='0'/>
            <span className={`background-widget__card ${this.state.hidden === false ? 'background-widget__card--visible': ''}`} aria-label='Option 2: Topographical SVG background pattern with a dark purple to yellow gradient overlay that spans from left to right' value='second' onClick={this.selectBackground} onKeyUp={this.selectBackground} tabIndex='0'/>
            <span className={`background-widget__card ${this.state.hidden === false ? 'background-widget__card--visible': ''}`} aria-label='Option 3: Light green to light blue gradient background that spans from left to right' value='third' onClick={this.selectBackground} onKeyUp={this.selectBackground} tabIndex='0'/>
          </div>
        </div>
      </div>
    )
  }
}
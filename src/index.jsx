'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomizeBackground from './components/CustomizeBackground.jsx';
import './scss/main.scss';

class App extends Component {
  render() {
    return(
      <Router>
        <CustomizeBackground/>
      </Router>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('react-src')
);
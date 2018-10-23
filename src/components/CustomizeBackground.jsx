'use strict';

import React, { Component } from 'react';

export default class CustomizeBackground extends Component {
  constructor() {
    super();
    this.background = null
  }

  selectBackground = (event) => {
    event.persist();

    switch (input) {
      case 'second':
        this.setState({});
        break;
      case 'third':
        this.setState({});
        break;
      default:
        this.setState({});
    }
  }

  render() {
    return(
      <div className={`background ${this.background}`}>
        <div className='background-selector'>
          <span value='first' onClick={this.selectBackground}/>
          <span value='second' onClick={this.selectBackground}/>
          <span value='third' onClick={this.selectBackground}/>
        </div>
      </div>
    )
  }
}
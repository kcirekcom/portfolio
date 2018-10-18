'use strict';

import React, { Component } from 'react';
import modals from '../data/modals.json';
import PrototypeModal from './PrototypeModal.jsx';

export default class Prototype extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: JSON.parse(localStorage.getItem('animation')) || false
    }
  }

  toggleAnimation = () => {
    localStorage.setItem('animation', !this.state.isChecked);
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    var prototypes = modals.map((d, i) => (d.category === 'prototype' ? <PrototypeModal {...this.state} prototype={d} key={i}/> : null));

    return (
      <div role='main'>
        <h1 className='text-center'>
          Animated Prototypes
        </h1>

        <div className='prototype-animation text-center'>
          <label htmlFor='animation'>
            Turn glare animation off
            <input type='checkbox' id='animation' name='animation' checked={this.state.isChecked} onChange={this.toggleAnimation} aria-hidden='true'/>
          </label>
        </div>

        {prototypes}
      </div>
    )
  }
}
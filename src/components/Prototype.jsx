'use strict';

import React, { Component } from 'react';
import modals from '../data/modals.json';
import PrototypeModal from './PrototypeModal.jsx';

export default class Prototype extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false
    }
  }

  toggleAnimation = () => {
    localStorage.setItem('animation', !this.state.isChecked);
    this.setState({ isChecked: !this.state.isChecked });
  }

  componentDidMount() {
    let selection = localStorage.getItem('animation');
    if (selection !== null) {
      this.setState({ isChecked: JSON.parse(selection) });
    }
  }

  render() {
    var prototypes = modals.map((d, i) => (d.category === 'prototype' ? <PrototypeModal {...this.state} prototype={d} key={i}/> : null));

    return (
      <main role='main'>
        <h1 className='text-center'>
          Animated Prototypes
        </h1>

        <div className='prototype-animation text-center'>
          <label htmlFor='animation'>
            Turn glare animation off
            <input type='checkbox' id='animation' name='animation' checked={this.state.isChecked} onChange={this.toggleAnimation}/>
          </label>
        </div>

        {prototypes}
      </main>
    )
  }
}
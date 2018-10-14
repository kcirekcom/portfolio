'use strict';

import React, { Component } from 'react';
import modals from '../data/modals.json';
import PrototypeModal from './PrototypeModal.jsx';

export default class Prototype extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: modals
    };
  }
  
  render() {
    var prototypes = this.state.data.map((d, i) => (d.category === 'development' ? null : <PrototypeModal prototype={d} key={i}/>));

    return (
      <div role='main'>
        <h1 className='text-center'>
          Animated Prototypes
        </h1>

        {prototypes}
      </div>
    )
  }
}
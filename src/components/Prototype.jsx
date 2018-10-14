'use strict';

import React, { Component } from 'react';
import modals from '../data/modals.json';
import PrototypeModal from './PrototypeModal.jsx';

export default class Prototype extends Component {
  render() {
    var prototypes = modals.map((d, i) => (d.category === 'development' ? null : <PrototypeModal prototype={d} key={i}/>));

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
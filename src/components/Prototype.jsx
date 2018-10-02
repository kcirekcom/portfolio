import React, { Component } from 'react';
import PrototypeModal from './PrototypeModal.jsx';
import modals from '../data/modals.json';

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
      <div>
        <h1 className='text-center'>
          Animated Prototypes
        </h1>

        {prototypes}
      </div>
    )
  }
}
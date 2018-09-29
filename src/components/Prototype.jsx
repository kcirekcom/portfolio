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
    var prototypes = this.state.data.map((d, i) => <PrototypeModal prototype={d} key={i}/>);

    return (
      <div>
        <h2 className='text-center'>
          Animated Prototypes
        </h2>

        {prototypes}
      </div>
    )
  }
}
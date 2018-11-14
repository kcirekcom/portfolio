'use strict';

import React, { Component } from 'react';
import DevelopmentModal from './DevelopmentModal.jsx';
import modals from '../data/modals.json';

export default class Development extends Component {
  render() {
    var developments = modals.map((d, i) => (d.category === 'development' ? <DevelopmentModal development={d} key={i}/> : null));

    return (
      <main className='card' role='main'>
        <h1 className='text-center'>
          Software Development
        </h1>

        {developments}
      </main>
    )
  }
}
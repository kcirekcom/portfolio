'use strict';

import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <main className='card card--about' role='main'>
        <h1 className='text-center'>Welcome</h1>

        <p>My name is Erick Mock, and I'm a web developer and designer. I have a certificate in advanced software development in full stack JavaScript along with a degree in psychology. I enjoy working with design software and web technologies to develop components that enhance the user experience and accessibility of creative platforms and interfaces.</p>

        <ul className='social'>
          <li className='social__link'><a href='https://github.com/kcirekcom' target='_blank' className='icon-github'/></li>
          <li className='social__link'><a href='https://www.linkedin.com/in/erick-mock' target='_blank' className='icon-linkedin'/></li>
          <li className='social__link'><a href='mailto:erick.f.mock@gmail.com?Subject=Collaboration' className='icon-envelop'/></li>
        </ul>
      </main>
    )
  }
}
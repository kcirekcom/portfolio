import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className='about-info'>
        <p>I am a web developer and designer. I have a certificate in advanced software development in full stack JavaScript along with a B.A. degree in psychology. I enjoy working with design software and web technologies to develop tools that enhance the user experience of creative platforms and interfaces.</p>

        <ul className='social'>
          <li><a href='https://github.com/kcirekcom' target='_blank' className='icon-github'/></li>
          <li><a href='https://www.linkedin.com/in/erick-mock' target='_blank' className='icon-linkedin'/></li>
          <li><a href='mailto:erick.f.mock@gmail.com?Subject=Collaboration' className='icon-envelop'/></li>
        </ul>
      </div>
    )
  }
}
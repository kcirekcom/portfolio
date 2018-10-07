'use strict';

import React, { Component } from 'react';

export default class Visualization extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center'>
          Data Visualizations
        </h1>

        <div className='visuals-section text-center'>
          <h2>Dropping Oil (Consumption)</h2>
          <div className='visual'>
            <a className='visual__link' href='https://mir-cdn.behance.net/v1/rendition/project_modules/1400/8524ae53433129.593595fa7d22f.jpg' target='_blank'>Behance Link</a>
            <img className='visual__img' src={require('../assets/data-viz/BP-Oil-Stats-2015.jpg')} alt='Data visualization for world oil consumption'/>
          </div>

          <h2>MLB Cy Young Data and Stats</h2>
          <div className='visual'>
            <a className='visual__link' href='https://mir-cdn.behance.net/v1/rendition/project_modules/1400/032ef153457803.593595bea62a4.jpg' target='_blank'>Behance Link</a>
            <img className='visual__img' src={require('../assets/data-viz/Cy-Young-Data-II.jpg')} alt='Data visualization for Cy Young baseball data'/>
          </div>

          <h2>Top Ranked High Schools in California</h2>
          <div className='visual'>
            <a className='visual__link visual__link--ca' href='https://mir-cdn.behance.net/v1/rendition/project_modules/1400/a166d953458315.59358fdfecd84.jpg' target='_blank'>Behance Link</a>
            <img className='visual__img' src={require('../assets/data-viz/Top-HS-CA.jpg')} alt='Visualization for CA HS Rankings'/>
          </div>

          <h2>Pioneering Psychology</h2>
          <div className='visual'>
            <a className='visual__link' href='https://mir-cdn.behance.net/v1/rendition/project_modules/1400/d0463353458781.59359572bc6f2.jpg' target='_blank'>Behance Link</a>
            <img className='visual__img' src={require('../assets/data-viz/Pioneering-Psychology.jpg')} alt='Visualization of the Origins of Psychology'/>
          </div>

          <h2>Star Facts</h2>
          <div className='visual'>
            <iframe className='visual__iframe' src='https://www.youtube.com/embed/wpE_EevJBmg' frameBorder='0' allowFullScreen></iframe>
          </div>

          <h2>Glacier Facts</h2>
          <div className='visual'>
            <iframe className='visual__iframe' src='https://www.youtube.com/embed/V3voeljivNs' frameBorder='0' allowFullScreen></iframe>
          </div>
        </div>
      </div>
    )
  }
}
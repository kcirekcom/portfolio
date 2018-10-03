import React, { Component } from 'react';

export default class Visualization extends Component {
  render() {
    return (
      <div>
        <h2 className='text-center'>
          Data Visualizations
        </h2>

        <div className='text-center'>
          <div className='data-img-section'>
            <div className='positioning'>
              <h3><a href='https://mir-cdn.behance.net/v1/rendition/project_modules/1400/8524ae53433129.593595fa7d22f.jpg' target='_blank'>Behance Link</a></h3>
              <img src={require('../assets/data-viz/BP-Oil-Stats-2015.jpg')} alt='Data visualization for world oil consumption'/>
            </div>

            <div className='positioning'>
              <h3><a href='https://mir-cdn.behance.net/v1/rendition/project_modules/1400/032ef153457803.593595bea62a4.jpg' target='_blank'>Behance Link</a></h3>
              <img src={require('../assets/data-viz/Cy-Young-Data-II.jpg')} alt='Data visualization for Cy Young baseball data'/>
            </div>

            <div className='positioning'>
              <h3><a className='a-ca' href='https://mir-cdn.behance.net/v1/rendition/project_modules/1400/a166d953458315.59358fdfecd84.jpg' target='_blank'>Behance Link</a></h3>
              <img src={require('../assets/data-viz/Top-HS-CA.jpg')} alt='Visualization for CA HS Rankings'/>
            </div>

            <div className='positioning'>
              <h3><a href='https://mir-cdn.behance.net/v1/rendition/project_modules/1400/d0463353458781.59359572bc6f2.jpg' target='_blank'>Behance Link</a></h3>
              <img src={require('../assets/data-viz/Pioneering-Psychology.jpg')} alt='Visualization of the Origins of Psychology'/>
            </div>
          </div>
          
          <iframe className='iframe' src='https://www.youtube.com/embed/wpE_EevJBmg' frameBorder='0' allowFullScreen></iframe>
          <iframe className='iframe' src='https://www.youtube.com/embed/V3voeljivNs' frameBorder='0' allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}
'use strict';

import React, { Component } from 'react';

export default class Visualization extends Component {
  render() {
    return (
      <main role='main'>
        <h1 className='text-center'>
          Data Visualizations
        </h1>

        <div className='visuals-section text-center'>
          <h2>Dropping Oil (Consumption)</h2>
          <div className='visual'>
            <a className='visual__link' href='https://mir-cdn.behance.net/v1/rendition/project_modules/1400/8524ae53433129.593595fa7d22f.jpg' target='_blank'>Bēhance Link</a>
            <img className='visual__img' src={require('../assets/data-viz/BP-Oil-Stats-2015.jpg')} alt='Data visualization about world oil consumption in 2015, which compares the U.S. consumption figure of 19,396 to other countries and regions. The numbers are measured in units of a thousand barrels daily.'/>
          </div>

          <h2>MLB Cy Young Data and Stats</h2>
          <div className='visual'>
            <a className='visual__link' href='https://mir-cdn.behance.net/v1/rendition/project_modules/1400/032ef153457803.593595bea62a4.jpg' target='_blank'>Bēhance Link</a>
            <img className='visual__img' src={require('../assets/data-viz/Cy-Young-Data-II.jpg')} alt='Data visualization about Cy Young baseball data collected from 2000 to 2015 for both the American League and National League, which illustrates the distribution of data in the categories of wins, strikeouts, and earned run average.'/>
          </div>

          <h2>Top Ranked High Schools in California</h2>
          <div className='visual'>
            <a className='visual__link visual__link--ca' href='https://mir-cdn.behance.net/v1/rendition/project_modules/1400/a166d953458315.59358fdfecd84.jpg' target='_blank'>Bēhance Link</a>
            <img className='visual__img' src={require('../assets/data-viz/Top-HS-CA.jpg')} alt='A visualization that shows the top-ranked California state high schools for 2016, as evaluated by the U.S. News and World Report Rankings.'/>
          </div>

          <h2>Pioneering Psychology</h2>
          <div className='visual'>
            <a className='visual__link' href='https://mir-cdn.behance.net/v1/rendition/project_modules/1400/d0463353458781.59359572bc6f2.jpg' target='_blank'>Bēhance Link</a>
            <img className='visual__img' src={require('../assets/data-viz/Pioneering-Psychology.jpg')} alt='A visualization about the origins of psychology, which groups key contributors into their respective disciplines and schools of thought. The disciplines observed include functionalism, structuralism, behaviorism, cognitivism, humanistic/gestalt, psychoanalytic/psychosocial, and neuropsychology.'/>
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
      </main>
    )
  }
}
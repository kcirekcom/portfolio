import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1 className='nav-brand name'>
          <a href='/'>
            Erick F. Mock
          </a>
        </h1>

        <div className='responsive'>
          <ul>
            <li><a href='/' className='icon-profile'/></li>
            <li><Link className='icon-insert-template' to='/prototypes'/></li>
            <li><Link className='icon-terminal' to='/development'/></li>
            <li><Link className='icon-stats-dots' to='/visualizations'/></li>
          </ul>
        </div>

        <ul className='nav-links'>
          <li>
            <Link className='nav-link-anchor proto' to='/prototypes'>
              Prototypes

              <div className='preview-proto'>
                Page Preview
                <img className='img-preview' src={require('../assets/screenshots/proto-snow.png')} alt='Prototypes page screenshot'/>
              </div>
            </Link>
          </li>

          <li>
            <Link className='nav-link-anchor dev' to='/development'>
              Development

              <div className='preview-dev'>
                Page Preview
                <img className='img-preview' src={require('../assets/screenshots/dev-snow.png')} alt='Development page screenshot'/>
              </div>
            </Link>
          </li>

          <li>
            <Link className='nav-link-anchor viz' to='/visualizations'>
              Visualizations

              <div className='preview-viz'>
                Page Preview
                <img className='img-preview' src={require('../assets/screenshots/viz-snow.png')} alt='Development page screenshot'/>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
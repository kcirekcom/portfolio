'use strict';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <p className='nav-brand name'>
          <NavLink to='/'>
            Erick F. Mock
          </NavLink>
        </p>

        <div className='responsive'>
          <ul>
            <li className='responsive__link'><NavLink className='icon-profile' to='/'/></li>
            <li className='responsive__link'><NavLink activeClassName='is-active--responsive' className='icon-insert-template' to='/prototypes'/></li>
            <li className='responsive__link'><NavLink activeClassName='is-active--responsive' className='icon-terminal' to='/development'/></li>
            <li className='responsive__link'><NavLink activeClassName='is-active--responsive' className='icon-stats-dots' to='/visualizations'/></li>
          </ul>
        </div>

        <ul className='navigation'>
          <li>
            <NavLink activeClassName='is-active' className='navigation__link proto' to='/prototypes'>
              Prototypes

              <div className='preview'>
                Page Preview
                <img className='preview__media' src={require('../assets/screenshots/proto-snow.png')} alt='Prototypes page screenshot'/>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName='is-active' className='navigation__link dev' to='/development'>
              Development

              <div className='preview'>
                Page Preview
                <img className='preview__media' src={require('../assets/screenshots/dev-snow.png')} alt='Development page screenshot'/>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName='is-active' className='navigation__link viz' to='/visualizations'>
              Visualizations

              <div className='preview'>
                Page Preview
                <img className='preview__media' src={require('../assets/screenshots/viz-snow.png')} alt='Development page screenshot'/>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
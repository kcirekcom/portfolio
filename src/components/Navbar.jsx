'use strict';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  setPointerEvents = (event) => {
    event.persist();
    let iframeMain = event.target.contentDocument.getElementsByTagName('main')[0];
    iframeMain.classList.add('pointer-events-none');
  }

  render() {
    return (
      <nav role='navigation'>
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
            <NavLink activeClassName='is-active' className='navigation__link' to='/prototypes'>
              Prototypes

              <div className='preview' aria-hidden="true">
                Page Preview
                <div className='preview__media'>
                  <iframe id="preview-frame" src="http://www.erickfmock.com/prototypes" onMouseOver={this.setPointerEvents}></iframe>
                </div>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName='is-active' className='navigation__link' to='/development'>
              Development

              <div className='preview' aria-hidden="true">
                Page Preview
                <div className='preview__media'>
                  <iframe id="preview-frame" src="http://www.erickfmock.com/development" onMouseOver={this.setPointerEvents}></iframe>
                </div>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName='is-active' className='navigation__link' to='/visualizations'>
              Visualizations

              <div className='preview' aria-hidden="true">
                Page Preview
                <div className='preview__media'>
                  <iframe id="preview-frame" src="http://www.erickfmock.com/visualizations" onMouseOver={this.setPointerEvents}></iframe>
                </div>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
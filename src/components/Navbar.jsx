'use strict';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  setPreviewFrame = (event) => {
    event.persist();
    let iframe = document.createElement('iframe');
    let path = event.target.parentElement.pathname;
    let iframeSrc = `http://www.erickfmock.com${path}`;
    iframe.setAttribute('id', 'preview-frame');
    iframe.setAttribute('src', `${iframeSrc}`);
    if (event.target.children[0].children.length === 0) {
      event.target.children[0].appendChild(iframe);
    }
  }

  setPointerEvents = (event) => {
    event.persist();
    let iframeMain = event.target.children[0].contentDocument.getElementsByTagName('main')[0];
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

              <div className='preview' aria-hidden='true' onMouseEnter={this.setPreviewFrame}>
                Page Preview
                <div className='preview__media' onMouseEnter={this.setPointerEvents} />
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName='is-active' className='navigation__link' to='/development'>
              Development

              <div className='preview' aria-hidden='true' onMouseEnter={this.setPreviewFrame}>
                Page Preview
                <div className='preview__media' onMouseEnter={this.setPointerEvents} />
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName='is-active' className='navigation__link' to='/visualizations'>
              Visualizations

              <div className='preview' aria-hidden='true' onMouseEnter={this.setPreviewFrame}>
                Page Preview
                <div className='preview__media' onMouseEnter={this.setPointerEvents} />
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
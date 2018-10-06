'use strict';

import React, { Component } from 'react';
import sanitizeHtml from 'sanitize-html';

export default class PrototypeModal extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      loading: false,
    }
  }

  close = () => {
    this.setState({modal: false});
  }

  open = () => {
    this.setState({modal: true, loading: true});
  }

  createMarkup = (htmlInput) => {
    return {__html: sanitizeHtml(htmlInput)};
  }

  render() {
    return (
      <div>
        <div className={`click-div click-div--${this.props.prototype.ref}`} onClick={this.open}>
          <h2 className={`click-div__title ${this.props.prototype.ref}`}>{this.props.prototype.name}</h2>
          <div className='click-div__copy'>{this.props.prototype.quickCopy}</div>
          <div className='glare'/>
        </div>

        {this.state.modal ? (
          <div className='modal-bg'>
            <span className='x' onClick={this.close}>
              &#x2715;
            </span>

            <div className={(this.props.prototype.web == true ? 'modal-web' : 'modal')}>
              <div className={(this.props.prototype.web == true ? 'modal-header-web' : 'modal-header')}>
                <button className='top' type='button' onClick={this.close}>
                  Close
                </button>

                <h1 className={`text-center ${this.props.prototype.ref}`}>
                  {this.props.prototype.name}
                </h1>
              </div>

              <div className='text-center modal-frame'>
                <iframe className={`artboard ${(this.props.prototype.web == true ? '' : 'artboard--mobile')}`} src={this.props.prototype.embedLink} frameBorder='0' allowFullScreen></iframe>
              </div>

              <div className='info' dangerouslySetInnerHTML={this.createMarkup(this.props.prototype.desc)}/>                         
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}
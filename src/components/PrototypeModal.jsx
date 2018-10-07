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
            <span className='modal-bg__btn' onClick={this.close}>
              &#x2715;
            </span>

            <div className={`modal ${(this.props.prototype.web == true ? 'modal--web' : '')}`}>
              <div className={`modal__header ${(this.props.prototype.web == true ? 'modal__header--web' : '')}`}>
                <button className='btn modal__btn' type='button' onClick={this.close}>
                  Close
                </button>

                <h1 className={`modal__title text-center ${this.props.prototype.ref}`}>
                  {this.props.prototype.name}
                </h1>
              </div>

              <div className={`modal__frame ${(this.props.prototype.web == true ? '' : 'modal__frame--mobile')} text-center`}>
                <iframe className='artboard' src={this.props.prototype.embedLink} frameBorder='0' allowFullScreen></iframe>
              </div>

              <div className='modal__info' dangerouslySetInnerHTML={this.createMarkup(this.props.prototype.desc)}/>                         
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}
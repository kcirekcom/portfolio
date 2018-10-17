'use strict';

import React, { Component } from 'react';
import AriaModal from 'react-aria-modal';
import sanitizeHtml from 'sanitize-html';

export default class PrototypeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }

  activateModal = () => {
    this.setState({ modal: true });
  };
 
  deactivateModal = () => {
    this.setState({ modal: false });
  };
 
  getApplicationNode = () => {
    return document.getElementById('react-src');
  };

  createMarkup = (htmlInput) => {
    return {__html: sanitizeHtml(htmlInput)};
  }

  render() {
    return (
      <div>
        <div className={`prototype prototype--${this.props.prototype.ref}`} tabIndex='0'>
          <h2 className={`prototype__title ${this.props.prototype.ref}`}>{this.props.prototype.name}</h2>
          <div className='prototype__copy'>{this.props.prototype.quickCopy}</div>
          <button className='btn prototype__btn' onClick={this.activateModal}>Learn more about this project</button>
          <div className='glare'/>
        </div>

        {this.state.modal ? (
          <AriaModal
            titleText={`${this.props.prototype.name} project`}
            onExit={this.deactivateModal}
            initialFocus='#deactivate-modal'
            getApplicationNode={this.getApplicationNode}
            underlayStyle={{ paddingTop: '50px' }}
          >
            <div className={`modal ${(this.props.prototype.web == true ? 'modal--web' : '')}`}>
              <div className={`modal__header ${(this.props.prototype.web == true ? 'modal__header--web' : '')}`}>
                <button id='deactivate-modal' className='btn modal__btn' type='button' onClick={this.deactivateModal}>
                  Close
                </button>

                <h2 className={`modal__title text-center ${this.props.prototype.ref}`}>
                  {this.props.prototype.name}
                </h2>
              </div>

              <div className={`modal__frame ${(this.props.prototype.web == true ? '' : 'modal__frame--mobile')} text-center`}>
                <iframe role='presentation' className='artboard' src={this.props.prototype.embedLink} frameBorder='0' allowFullScreen></iframe>
              </div>

              <div className='modal__info modal__info--prototype' dangerouslySetInnerHTML={this.createMarkup(this.props.prototype.desc)}/>                         
            </div>
          </AriaModal>
        ) : null}
      </div>
    )
  }
}
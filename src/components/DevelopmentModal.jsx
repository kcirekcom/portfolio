'use strict';

import React, { Component } from 'react';
import AriaModal from 'react-aria-modal';
import sanitizeHtml from 'sanitize-html';

export default class DevelopmentModal extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      activeKey: 0
    }

    this.activateModal = this.activateModal.bind(this);
    this.deactivateModal = this.deactivateModal.bind(this);
    this.getApplicationNode = this.getApplicationNode.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
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

  toggleClass(event) {
    event.persist();

    let value = event.target.attributes.value.value;
    this.setState({ activeKey: value });
  };

  render() {
    var imgsArr = [];
    for (var i = 0; i < 5; i++) { 
      imgsArr.push(this.props.development.ref);
    }

    var banner = imgsArr.map((img, i) => {
      if (i === 0) {
        return (
          <div className='development' key={i}>
            <img className='development__img' src={require(`../assets/websites/${img}/${img}-${i}.png`)} alt=''/>
            <button className='btn development__btn' onClick={this.activateModal}>Learn more about this project</button>
          </div>
        )
      }
      return null;
    });

    var imgs = imgsArr.map((img, i) => {
      return(
        <div className={`slide ${this.state.activeKey == i ? 'slide--active': ''}`} key={i}>
          <img className='slide__img' src={require(`../assets/websites/${img}/${img}-${i}.png`)} alt='' onClick={this.toggleClass} onKeyUp={this.toggleClass} value={i} tabIndex='0'/>
        </div>
      )
    });

    return (
      <div>
        <h2 className={`text-center ${this.props.development.ref}`}>
          {this.props.development.name}
        </h2>

        {banner}

        {this.state.modal ? (
          <AriaModal
            titleText={`${this.props.development.name} project`}
            onExit={this.deactivateModal}
            initialFocus='#deactivate-modal'
            getApplicationNode={this.getApplicationNode}
            underlayStyle={{ paddingTop: '50px' }}
          >
            <div className='modal modal--web'>
              <div className='modal__header modal__header--web'>
                <button id='deactivate-modal' className='btn modal__btn' type='button' onClick={this.deactivateModal}>
                  Close
                </button>

                <h2 className={`modal__title text-center ${this.props.development.ref}`}>
                  {this.props.development.name}
                </h2>
              </div>

              <div className='slideshow' aria-hidden='true'>
                {imgs}
              </div>

              <div className='modal__info' dangerouslySetInnerHTML={this.createMarkup(this.props.development.desc)}/>      
            </div>
          </AriaModal>
        ) : null}
      </div>
    )
  }
}
import React, { Component } from 'react';

export default class PrototypeModal extends Component {
  constructor() {
    super();
    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
    this.state = {
      modal: false,
      loading: false,
    }
  }

  close() {
    this.setState({modal: false});
  }

  show() {
    this.setState({modal: true, loading: true});
  }

  createMarkup(htmlInput) {
    return {__html: htmlInput};
  }

  render() {
    return (
      <div>
        <div className={`${this.props.prototype.style}-click`} onClick={this.show}>
          <div className={`show ${this.props.prototype.style}`}>{this.props.prototype.name}</div>
          <div className='hide'>{this.props.prototype.quickSummary}</div>
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

                <h2 className={`text-center ${this.props.prototype.style}`}>
                  {this.props.prototype.name}
                </h2>
              </div>

              <div className='text-center modal-frame'>
                <iframe className='artboard' src={this.props.prototype.embedLink} frameBorder='0' allowFullScreen></iframe>
              </div>

              <div className='info' dangerouslySetInnerHTML={this.createMarkup(this.props.prototype.desc)}/>                         
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}
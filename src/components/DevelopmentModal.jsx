import React, { Component } from 'react';
import sanitizeHtml from 'sanitize-html';

export default class DevelopmentModal extends Component {
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

  show = () => {
    this.setState({modal: true, loading: true});
  }

  createMarkup = (htmlInput) => {
    return {__html: sanitizeHtml(htmlInput)};
  }

  render() {
    var imgsArr = [];
    for (var i = 0; i < 5; i++) { 
      console.log(i);
      imgsArr.push(this.props.development.ref);
    }

    var clickImg = imgsArr.map((img, i) => (i !== 0) ?  null : <img className='click-img' key={i} src={require(`../assets/websites/${img}/${img}-${i}.png`)} alt=''/>);

    var imgs = imgsArr.map((img, i) => <img className='img' key={i} src={require(`../assets/websites/${img}/${img}-${i}.png`)} alt=''/>);

    return (
      <div>
        <h2 className={`text-center ${this.props.development.ref}`}>
          {this.props.development.name}
        </h2>

        {clickImg}

        {this.state.modal ? (
          <div className='modal-bg'>
            <span className='x' onClick={this.close}>
              &#x2715;
            </span>

            <div className='modal-web'>
                <div className='modal-header-web'>
                  <button className='top' type='button' onClick={this.close}>
                    Close
                  </button>

                  <h1 className={`text-center ${this.props.development.ref}`}>
                    {this.props.development.name}
                  </h1>
                </div>

                <div className='img-section'>
                  {imgs}
                </div>

                <div className='info-dev' dangerouslySetInnerHTML={this.createMarkup(this.props.development.desc)}/>      
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}
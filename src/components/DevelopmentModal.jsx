import React, { Component } from 'react';

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
      <div>{clickImg}</div>
      <div>{imgs}</div>
      </div>
      // <div>
      //   <h3 className='text-center mrspapers'>
      //     MRS papers
      //   </h3>

      //   {this.state.modal ? (
      //     <div className='modal-bg'>
      //       <span className='x' onClick={this.close}>
      //           &#x2715;
      //       </span>

      //       <div className='modal-web'>
      //           <div className='modal-header-web'>
      //               <button className='top' type='button' onClick={this.close}>
      //                   Close
      //               </button>

      //               <h2 className='text-center mrspapers'>
      //                   MRS papers
      //               </h2>
      //           </div>

      //           <div className='img-section'>
      //               <img className='img' src={require('../../assets/websites/MRS/MRS-home.png')} alt='MRS home view'/>
      //               <img className='img' src={require('../../assets/websites/MRS/MRS-chapters.png')} alt='MRS chapter view'/>
      //               <img className='img' src={require('../../assets/websites/MRS/MRS-admin-login.png')} alt='MRS admin login view'/>
      //               <img className='img' src={require('../../assets/websites/MRS/MRS-admin-1.png')} alt='MRS first admin view'/>
      //               <img className='img' src={require('../../assets/websites/MRS/MRS-admin-2.png')} alt='MRS second admin view'/>
      //           </div>

      //           <div className='info-dev'>
      //               <span>Click <a href='http://www.mrspapers.com' target='_blank'>HERE</a> to view this website.</span>
                    
      //               <span>This application is a self-publishing platform. It delivers transactions to an API that I built, which allows the user to create and modify a manuscript by adding, updating and deleting chapters. This site has the scalability to include many users, but it is currently deployed for personal use only.</span>
      //           </div>
      //       </div>
      //     </div>
      //   ) : null}
      // </div>
    )
  }
}
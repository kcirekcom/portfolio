import * as React from 'react';

export default function Loader(props) {
  if (props.error) {
    return(
      <div className='loader text-center'>Sorry, there was a problem loading this page.
        <button className='btn' onClick={ props.retry }>Retry</button>
      </div>
    )
  } else if (props.pastDelay) {
    return(
      <div className='loader text-center'>Loading page
        <span className='loader__dot'/>
        <span className='loader__dot'/>
        <span className='loader__dot'/>
      </div>
    )
  } else {
    return null;
  }
};
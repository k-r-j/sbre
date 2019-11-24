import React from 'react';

function FeedCounter(props){
  return(
    <div className="Feed__counter">
      You have {props.counter} feeds.
    </div>
  )
}

export default FeedCounter;

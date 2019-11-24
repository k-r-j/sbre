import React, { Component } from 'react';

class FeedItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      likes: this.props.likes
    }
  }
  incrementLikes = () => {
    this.setState( (prevState) => ({
      likes: prevState.likes + 1
    }))
  }

  render() {
    return(
      <li className="Feed__item">
        {this.props.value}
        <button className="Feed__item__likeButton" onClick={this.incrementLikes}>{this.state.likes}</button>
      </li>
    )

  }
}
export default FeedItem;

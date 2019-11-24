import React, { Component } from 'react';
import FeedInput from './FeedInput';
import FeedCounter from './FeedCounter';
import FeedItem from './FeedItem';

import "./Feed.css";
import feedData from '../data/data.json';

class Feed extends Component {
  constructor(props){
    super(props);
    this.state = {
      feed: feedData.feed
    }
  }

  addNewFeed = (newFeed) => {
    this.setState(prevState => {
      const updatedFeed = prevState.feed.concat(newFeed);
      return({
        feed: updatedFeed
      });
    })
  }

  render() {
    return(
      <div className="Feed">
        <FeedCounter counter={this.state.feed.length} />
        {this.state.feed.length > 0 &&
        <ul className="Feed__list">
          {this.state.feed.map(i =>
            <FeedItem value={i.value} likes={i.likes} key={i.id} />
          )}
        </ul>
        }
        <FeedInput addNewFeed={this.addNewFeed} count={this.state.feed.length}/>
      </div>
    )

  }
}
export default Feed;

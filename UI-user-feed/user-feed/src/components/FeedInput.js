import React, { Component } from 'react';

class FeedInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }
  handleOnChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.props.addNewFeed({
        user: "User 3",
        value: this.state.value,
        id: this.props.count+1,
        timestamp: "1502580722572",
        timeZoneOffset: "300",
        likes: 0
      });
      this.setState({value: ''});
    }
  }

  render() {
    return(
      <input type="text" className="Feed__input"
        value={this.state.value}
        onChange={this.handleOnChange}
        onKeyPress={this.handleKeyDown}
      />
    )

  }
}
export default FeedInput;

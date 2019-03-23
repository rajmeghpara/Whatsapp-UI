import React, { Component } from 'react';

class Message extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={this.props.direction==="left" ? "received-msg item" : "sent-msg item"}>

          <div className="triangle-up">

          </div>
          <div >
          {this.props.text}
          </div>
      </div>
    );
  }
}

export default Message;

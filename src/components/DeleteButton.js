import React, { Component } from 'react';

class Delete extends Component {

  render() {
    return (
      <div className="note">
      {this.props.text}
      <button onClick={this.props.deleteMethod}>Delete</button>
      </div>
    
    );
  }
}

export default Delete;

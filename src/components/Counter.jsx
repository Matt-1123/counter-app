import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    console.log(this.state.count);
  }

  render() {

    return (
      <React.fragment>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm">
          Increment
        </button>
      </React.fragment>

    );
  }

}



export default Counter;

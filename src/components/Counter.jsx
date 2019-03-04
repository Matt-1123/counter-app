import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value;
  };

  handleIncrement = product => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return(
      <React.fragment >
        <span className = { this.getBadgeClasses() } > { this.formatCount() }</span >
        <button
          onClick = {() => this.handleIncrement(product)}
          className = "btn btn-secondary btn-sm" >
          Increment
        </button>
      </React.fragment >
    );

    getBadgeClasses() {
      let classes = "badge m-2 badge-";
      classes += this.state.count === 0 ? "warning" : "primary";
      return classes;
    };
  }

export default Counter; 

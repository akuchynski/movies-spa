import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div className="counter-block">
        <div className="counter">
          <h3>Counter:</h3>
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          <button onClick={this.incrementCount}>+</button>
          <button onClick={this.decrementCount}>-</button>
        </div>
      </div>
    );
  }
}

export { Counter };

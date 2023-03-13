import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        {this.props.children(this.state.count, this.increment)}
      </div>
    );
  }
}

class Renderprops extends React.Component {
  render() {
    return (
      <Counter>
        {(count, increment) => (
          <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
          </div>
        )}
      </Counter>
    );
  }
}

export default Renderprops;

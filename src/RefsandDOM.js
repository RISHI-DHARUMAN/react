import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  handleClick = () => {
    this.myRef.current.innerHTML = 'Button clicked!';
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <div ref={this.myRef}>Initial content</div>
      </div>
    );
  }
}
export default MyComponent

// ReactDOM.render(<MyComponent />, document.getElementById('root'));

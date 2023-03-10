import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    if (error instanceof CountLimitError) {
      return { hasError: true, errorMessage: 'Count limit exceeded.' };
    } else {
      return { hasError: true, errorMessage: 'Something went wrong.' };
    }
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error('Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI to display when an error is caught
      return <h1>{this.state.errorMessage}</h1>;
    }

    return this.props.children;
  }
}

class CountLimitError extends Error {}

function MyComponent(props) {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
    if (count >= 10) {
      throw new CountLimitError();
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default function ErrorHandeling()
 {
  return (
    <div>
      <h1>My App</h1>
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
    </div>
  );
}

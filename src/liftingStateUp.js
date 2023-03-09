import React, { useState } from "react";

function TotalCounter(props) {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Total Count: {count}</p>
      {/* Render two instances of the Counter component */}
      <Counter count={count} onIncrement={handleIncrement} />
      <Counter count={count} onIncrement={handleIncrement} />
    </div>
  );
}

function Counter(props) {
  function handleIncrement() {
    // Call the onIncrement function passed down from TotalCounter component
    props.onIncrement();
  }

  return (
    <div>
      <p>Count: {props.count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default TotalCounter;

import React from 'react';

const ChildComponent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      {props.children}
    </div>
  );
});

function ParentComponent() {
  const ref = React.useRef();

  function handleClick() {
    ref.current.style.backgroundColor = 'blue';
  }

  return (
    <div>
      <ChildComponent ref={ref}>
        Hello, world!
      </ChildComponent>
      <button onClick={handleClick}>Change child component background color</button>
    </div>
  );
}
 export default ParentComponent
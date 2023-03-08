import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(
    document.getElementById('root')
    );

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  function App() {
    return (
      <div>
        <Welcome name="RISHI" />
        <Welcome name="SEENI" />
        <Welcome name="REVI" />
      </div>
    );
   
  } 
  root.render(<App/>)

  export default Welcome


  
import React, { createContext } from "react";

const MyContext = createContext("default value");
const Userprovider = MyContext.Provider
const Userconsumer = MyContext.Consumer

function Context() {
  return (
    <Userprovider value ="context">
         <Child1/>
    </Userprovider>
     
   
  );
}

function Child1() {
  return (
   < Child2/>
  );
  }
  function Child2() {
    return (
    < Child3/>
    );
  }

    function Child3() {
        return (
          <Userconsumer>
            {(value) => <h1>This is the example of {value}</h1>}
          
          </Userconsumer>
            
        );
    }

export default Context

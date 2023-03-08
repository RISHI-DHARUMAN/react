
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Rishi',
    lastName: 'D'
  };
  
  const Element = () =>{ 
    return( <h1>
      Hello, {formatName(user)}
    </h1>);
  }
  

  export default Element;
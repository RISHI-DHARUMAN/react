
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'hello',
    lastName: 'world'
  };
  
  const Element = () =>{ 
    return( <h1>
       {formatName(user)}
    </h1>);
  }
  

  export default Element;
// import react from 'react';
// import Person from '/.person'

function Namelist(){
    const person=[
        {
            id:1,
            name:'rishi',
            skill:'react'
        },
        {
            id:2,
            name:'seeni',
            skill:'angular'
        },
        {
            id:3,
            name:'revi',
            skill:'java'
        },
        {
            id:4,
            name:'mouli',
            skill:'everything'
        }
    ]
   const details = person.map((d)=>d)

   return (
    <div>
      {details.map((d) => (
        <div key={d.id}> {d.id}   
        <p>my name is {d.name} and my skill is {d.skill}</p> 
          
        </div>
        
      ))}
    </div>
  );
}
export default Namelist
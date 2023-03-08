// import react from 'react';
import Person from '/.person'

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
    const personlist = person.map(person=> <Person key ={person.id} person ={person}/>);

    return <div>
       { personlist}
    </div>
}
export default Namelist
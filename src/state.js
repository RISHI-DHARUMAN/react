// class test extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state =
//         {
//             id:1,
//             name:"test"
//         };
//     }

//     render(){
//         return(
//             <div>
//                 <p>{this.state.id}</p>
//                 <p>{this.state.name}</p>
//             </div>
//         )
//     }
// }
// export default test;


import React from 'react';


class Message extends React.Component
{
    constructor(){
        super();
        this.state={
            message:"welcome visitor"
        }
    }

    changeMessage(){
        this.setState({
            message:"thank u for subscribing"
        })
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Message
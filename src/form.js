function Form() 
{
    function handelchange(event)
    {
        // console.log("changed")
        console.log(event.target.value)
        console.log(event.target.type)
        console.log(event.target.placeholder)

    }

    return (
        <div>
            <h1>hello</h1>
            <input onChange={handelchange} type="text" placeholder="Enter your name" />
            <button>submit</button>
 
        </div>

    )
}
export default Form
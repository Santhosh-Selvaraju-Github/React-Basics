import React from 'react'

//Click Events
const Events = () => {
    const alert = () => { 
        prompt("hi")
     }

    return (
        <div>
            <button onClick={alert}>Click event</button>
        </div>
    )
}

//Passing arguments(params)

const WithParams = () => {
    const params = (a,b) => { 
        alert(a)
        alert(b.type)
     }
    return (
        <div>
            <h1>---Click Events---</h1>
            <button onClick={(event)=>params("Santhosh",event)}>Click with params</button>
        </div>
    )
}

export {
    Events,
    WithParams
}
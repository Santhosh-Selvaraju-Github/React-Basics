import React from 'react'

const FirstCondition = () => { 
    return(
        <h3>Goal!!!</h3>
    )
}

const SecondCondition = () => { 
    return(
        <h3>Missed!!!</h3>       
    )
}

//If-else conditions
const Conditionals = (props) => {
    const isGoal = props.isGoal
    return(
        <>
            <h1>---Ternary operators---</h1>
            { isGoal ? <FirstCondition /> : <SecondCondition /> }
        </>
    )
    
    // if(!isGoal){
    //     return <FirstCondition />
    // }
    // return <SecondCondition />    
}

//Logical Conditions (&&)
const LogicalConditionals = (props) => {
    const cars = props.cars

    return (
        <div>
            <h1>---Logical Conditions(&&)---</h1>
            <h2>How many cars in garage?</h2>
            { cars.length > 0 &&
                <h3>I'm having {cars.length} cars in my garage</h3>
            }
        </div>
    )
}

export {Conditionals,LogicalConditionals}
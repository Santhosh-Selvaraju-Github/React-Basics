import React, { useState } from 'react'

const UseState = () => {
    const [color,setColor] = useState("Red")
    const [cars,setCars] = useState({
        id:1,
        brand:"Ford",
        year:2021
    })

    const updateBrand = () => {
        setCars((previousStateChange) => {
            console.log(previousStateChange)
            //previous state updated
            return { ...previousStateChange, brand: "BMW" }
        });
    }

    const updateBrand1 = () => {
        setCars((previousStateChange) => {
            console.log(previousStateChange)
            return { ...previousStateChange, brand: "Audi" }
        });
      }

    return (
        <div>
            <h1>---useState---</h1>
            <h3>This is {color} color - {cars.brand} car</h3>
            <button type='submit' onClick={()=>setColor("Blue")}>Blue</button>
            <button type='button' onClick={()=>setColor("Green")}>Green</button>
            <button type='button' onClick={updateBrand}>BMW</button>
            <button type='button' onClick={updateBrand1}>AUDI</button>
        </div>
    )
}

export default UseState

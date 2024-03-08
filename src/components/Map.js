import React from 'react'

const carList1 = [
    {
        id:1,
        brand:"ford",
        year:2021
    },{
        id:2,
        brand:"Audi",
        year:2022
    },{
        id:3,
        brand:"BMW",
        year:2020
    },{
        id:4,
        brand:"Benz",
        year:2019
    }
]

const CarList = (props) => {
    return(
        <li key={props.id}>
            <h3>This is {props.brand} {props.year}</h3>
        </li>
    )
 }

const Map = (props) => {      
    const carList = props.carList
    console.log(carList[0].brand)

    return (
        <div>
            <h1>---Using Map---</h1>
            <h2>What is inside Garage?</h2>
            <ul>
                <h2>*all details direct implement in as list using map</h2>
                {carList1.map((details)=><li key={details.id}>This is {details.brand}</li>)}
                <h2>*all details send to another function in as list using map</h2>
                {carList.map((details)=>
                    <CarList id = {details.id} brand = {details.brand} year = {details.year}/>
                )}
            </ul>
        </div>
    )
}

export default Map
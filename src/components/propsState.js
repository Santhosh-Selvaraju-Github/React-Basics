//props -> It is used to share data
//state -> It is used to save data
//setState -> It is used to change the saved data

import React, { Component } from 'react'

class propsState extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Santhosh",
            age: 32
        }

        //place acts as state(saving data purpose)
        this.place = { 
            city: "Salem"
        }

        this.newName = this.newName.bind(this)

    }

    newName(){
        this.setState({
            name: "sjp",
            age: 2
        })
    };

    Change(){
        this.setState({
            name: "Santhosh S",
            age: 33
        })
    };

    render() {
        return (
            <section>
                <h1>---Props and State using Class</h1>
                <div>{this.state.name} {this.state.age} {this.place.city}</div>
                <div>
                    <button type='button' onClick={this.newName}>New Name</button>
                    <button type='button' onClick={this.Change.bind(this)}>OnClick</button>
                </div>
            </section>
        )
    }
}

export default propsState

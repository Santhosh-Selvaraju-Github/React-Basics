//rcc -> Class components

import React, { Component } from 'react'

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>---Using Class Component---</h1>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}
export default ClassComponent


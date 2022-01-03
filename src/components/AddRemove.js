import React, { Component } from "react"
import Button from './button.js'

class AddRemove extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switches: [],
    }
  }

  addSwitch = () => {
    this.setState({ switches: [...this.state.switches, <Button />] });
     }

  removeSwitch = () => {
    if (this.state.switches[0] !== false) {
    var newArray = [...this.state.switches]
    newArray.pop()
      this.setState({ switches: newArray })
    }
  }

  render() {
    return (
      <>
          <button onClick={this.addSwitch}>Add</button>
          <button onClick={this.removeSwitch}>Remove</button>
          {this.state.switches}
      </>
    )
  }
}
export default AddRemove

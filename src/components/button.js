import React, { Component } from 'react'

class Button extends Component{
//set up constructor and super, with state object with two keys
//one key offOn and one key bulb, to show the color of the bulb at the off or on state
  constructor(props) {
    super(props);
    this.state = {
      offOn: 'off',
      bulb: 'white'
    }
  }
//code a function that toggles offOn and bulb using conditionals

flip = () => {
  if (this.state.offOn === 'off') {
    this.setState({offOn: 'on', bulb: 'yellow'})
  } else {
    this.setState({offOn: 'off', bulb: 'white'})
  }
}
//render a button that when clicked, changes the word and color contained witin using flip function above
// make the button square shaped in css file
render(){
  return(
    <>
      <button
      id='Button' onClick={this.flip} style={{background: this.state.bulb}}
      >
      {this.state.offOn}
      </button>
    </>
  )
 }
}

export default Button

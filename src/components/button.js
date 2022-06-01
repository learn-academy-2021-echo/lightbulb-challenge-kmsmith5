import React, { Component } from 'react'
import bulbOff from "./BulbOff.jpg";
import bulbOn from './BulbOn.jpg';
import switchOn from "./SwitchOn.jpg";
import switchOff from "./SwitchOff.jpg"


class Button extends Component{
//set up constructor and super, with state object with two keys
//one key offOn and one key bulb, to show the color of the bulb at the off or on state
  constructor(props) {
    super(props);
    this.state = {
      switchImg: switchOff,
      bulbImg: bulbOff,
    }
  }
//code a function that toggles offOn and bulb using conditionals
// refactor flip function to switch the images of both switch and bulb simultaneously
flip = () => {
  if (this.state.switchImg === switchOff) {
    this.setState({switchImg: switchOn, bulbImg: bulbOn})
  } else {
    this.setState({switchImg: switchOff, bulbImg: bulbOff})
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
//chamge from button to image with onclick functionality
render(){
  return(
    <>
      <img className= 'switch' src={this.state.switchImg} onClick={this.flip}></img>
      <img className = 'bulb' src={this.state.bulbImg}></img>

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

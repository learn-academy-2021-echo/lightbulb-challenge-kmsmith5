import React, { Component } from 'react'
import './App.css'
import Button from './components/button.js'
import AddRemove from './components/AddRemove.js'

class App extends Component{
  render(){
    return(
      <>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
  <h1>Lightbulb Challenge</h1>
      </div>
        <AddRemove />
        <Button />
        <Button/>
      </>
    )
  }
}
export default App

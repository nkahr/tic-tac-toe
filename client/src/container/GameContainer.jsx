import React from 'react'
import Grid from '../components/Grid'

class GameContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squareStates: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], 
      currentPlayer: "x", 
      currentKey: null
    }

    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
      <div> 
        <h1> TIC TAC TOE </h1>
        <Grid squareStates={this.state.squareStates} handleClick={this.handleClick} currentPlayer={this.state.currentPlayer}/>
      </div>
    )
  }

  handleClick(currentPlayer, key) {
    this.setState({currentKey: key})
    // this.changeCurrentKey()
    const array = this.state.squareStates;
    array[this.state.currentKey] = this.state.currentPlayer
    this.setState({squareStates: array})

    if (this.state.currentPlayer === "x") {
      this.setState({currentPlayer: "o"})
    }

    if (this.state.currentPlayer === "o") {
      this.setState({currentPlayer: "x"})
    }

  }

}


export default GameContainer
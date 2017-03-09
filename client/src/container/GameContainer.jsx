import React from 'react'
import Square from '../components/Square'
import GameFunctions from '../models/GameFunctions'

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

    const arrayOfSquares = this.state.squareStates.map((squareState, index) => {
      if (squareState == "x") {
        return <Square className="x" key={index} handleClick={this.handleClick} currentPlayer={this.state.currentPlayer}/>
      } else if (squareState == "o") {
        return <Square className="o" key={index} handleClick={this.handleClick} currentPlayer={this.state.currentPlayer} />
      } else {
        return <Square className=" " key={index} ind={index} handleClick={this.handleClick} currentPlayer={this.state.currentPlayer} />
      }
    })

    return (
      <div className="grid"> 
        {arrayOfSquares}
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
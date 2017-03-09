import React from 'react'
import Square from './Square'

const Grid = function(props) {

  console.log("grid")

  const arrayOfSquares = props.squareStates.map(function(state, index) {
    if (state == "x") {
      return <Square className="x" key={index} handleClick={props.handleClick} currentPlayer={props.currentPlayer}/>
    } else if (state == "o") {
      return <Square className="o" key={index} handleClick={props.handleClick} currentPlayer={props.currentPlayer} />
    } else {
      return <Square className=" " key={index} ind={index} handleClick={props.handleClick} currentPlayer={props.currentPlayer} />
    }
  })

  console.log(arrayOfSquares);

  return (
    <div className="grid"> 
      {arrayOfSquares}
    </div>
  )
}

export default Grid
import React from 'react'

class Square extends React.Component{

  constructor(props) {
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this)
  }


  render() {
    return (
        <div className="square" onClick={this.handleOnClick}> 
        <p>{this.props.className}</p>
        </div>
      )
  }

  handleOnClick() {
    this.props.handleClick(this.props.currentPlayer, this.props.ind)
  }

}

export default Square
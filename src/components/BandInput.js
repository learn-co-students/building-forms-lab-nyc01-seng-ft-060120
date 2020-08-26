// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  state = {name:""}

  render() {
    return(
      <form onSubmit={e =>
      {
        e.preventDefault()
        this.props.addBand(this.state)
        this.setState(() => {return {name:""}})
      }}>
        Band Input
        <input type="text" value={this.state.name} onChange={ e => {
          e.persist()
          this.setState(() => {return {name: e.target.value}})
        }}/>
        <input type="submit"/>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {addBand: (band) => dispatch({type: 'ADD_BAND', band})}
}

export default connect(null, mapDispatchToProps)(BandInput)

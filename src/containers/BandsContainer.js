import React, { Component } from 'react'
import BandsInput from '../components/BandInput'
import {connect} from 'react-redux'

class BandsContainer extends Component {
  render() {
    console.log(this.props)
    return(
      <div>
        <BandsInput/>
        BandsContainer
        <ul>
          {this.props.bands.map(band => <li>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {bands: state.bands}
}

export default connect(mapStateToProps)(BandsContainer)

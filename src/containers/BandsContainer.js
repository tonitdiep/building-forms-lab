import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'
import { connect } from 'react-redux'
class BandsContainer extends Component {
  render() {
    console.log('checking', this.props)
    return(
      <div>
        BandsContainer
        <BandInput addBand= {this.props.addBand} />
        <Bands bands = {this.props.bands} />
      </div>
    )
  }
}

// const mapStateToProps = ({ bands }) => ({bands})
const mapStateToProps = (state) => {
    return ( { 
        bands: state.bands
    })
}
const mapDispatchToProps = dispatch => ({ addBand: band => dispatch ({ type: 'ADD_BAND', band }) })
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);

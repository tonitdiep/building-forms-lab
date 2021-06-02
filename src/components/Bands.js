import React from 'react'

export const Bands = (props) => {
    let bands = []
    if (props.bands && props.bands.map) {
    bands = props.bands.map ( ( band, index ) => { 
       return <li key={index}> {band.name} </li>
    })
    }
    return (
        <div>
            {bands}
        </div>
    )
}
export default Bands;
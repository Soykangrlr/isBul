import React from 'react'

function LocationCard(props) {
    const {item}=props
    return (
        <div className='location-card'>
            <p className='location-name'>{item.name}</p>
            <hr/>
            <div className='location-info'>
                <p>{item.type}</p>
                <p>{item.dimension}</p>
            </div>
        </div>
    )
}

export default LocationCard

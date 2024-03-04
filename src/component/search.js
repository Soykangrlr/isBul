import React from 'react'

function Search(props) {
    const {value,onChange}=props
    return (
        <div>
            <input placeholder='Search for characters...' type='text' value={value} onChange={onChange} />
        </div>
    )
}

export default Search

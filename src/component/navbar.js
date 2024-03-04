import React, { useEffect, useState } from 'react'
import {  NavLink } from 'react-router-dom'
import Search from './search'
import { useDispatch } from 'react-redux'
import { getAllCharacterAsync } from '../store/character/characterSlice'

function Navbar() {
    const [searchValue,setSearchValue]=useState('')
    const dispatch=useDispatch()
    useEffect(()=>{
        if(searchValue.trim().length===0){
        dispatch(getAllCharacterAsync({page:1,search:''}))
    }
       
    },[searchValue])
    const handleSearch=(value)=>{
        setSearchValue(value)
    }
    const handleClickSearch=()=>{
        dispatch(getAllCharacterAsync({page:1,search:searchValue}))
    }
    
    return (
        <div className='navbar'>
            <ul>
            <NavLink to="/">
                <li>Character</li></NavLink>
                <NavLink activeClassName="active" to="location">
                <li>Location</li>
                </NavLink>
             
                <NavLink to="favorite">
                <li>Favorite</li>
                </NavLink>
            </ul>
            <div className='search-input'>
                <Search onChange={(e)=>handleSearch(e.target.value)} value={searchValue}/>
                <button onClick={()=>handleClickSearch()}>Ara</button>
            </div>
        </div>
    )
}

export default Navbar

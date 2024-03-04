import React, { useEffect, useState } from 'react'
import {  getAllCharacterAsync } from '../store/character/characterSlice'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../component/card'

import Pagination from '../component/pagination'
import { addFavoriteReducer } from '../store/favorite/favoriteSlice'


import Search from '../component/search'

function HomePage() {
    const dispatch=useDispatch()
    const {data,loading,info}=useSelector(state=>state.character)

    const [currentPage, setCurrentPage] = useState(1);

  
    useEffect(()=>{
        dispatch(getAllCharacterAsync({page:1,search:''}))
       
    },[])
 
    if(loading){
        return(
            <div>Loading..</div>
        )
        }

   if( data.length===0){
     return(
         <div>The Character you are looking for was not found</div>
     )
   }
    const addFavorite=(item)=>{
        dispatch(addFavoriteReducer(item))
    }
    const paginationItemClick=(page)=>{
       
        dispatch(getAllCharacterAsync(page))
        setCurrentPage(page);
    }
 
    return (
       
         
            <div className='character-page'>
              
        <div className='character-list'>
        {data?.map(item=>(
            
            <Card character={item} handleFavoriteClick={()=>addFavorite(item)}/>
        ))}
        
        </div>
        <Pagination currentPage={currentPage} info={info} onClick={(page)=>paginationItemClick(page)}/>
        </div>
  
    )
}

export default HomePage

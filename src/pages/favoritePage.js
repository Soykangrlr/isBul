import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../component/card'
import { addFavoriteReducer } from '../store/favorite/favoriteSlice'

function FavoritePage() {
    const {data}=useSelector(state=>state.favorite)
    const dispatch=useDispatch()
    const addFavorite=(item)=>{
        dispatch(addFavoriteReducer(item))
    }
    if(data.length<1){
        return(
            <div>You have not added to your favorites</div>
        )
    }
    return (
        <div className='character-list'>
        {data.map(item=>(
            
            <Card character={item} handleFavoriteClick={()=>addFavorite(item)}/>
        ))}
        
        </div>
    )
}

export default FavoritePage

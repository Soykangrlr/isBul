import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCharacterDetailAsync } from '../store/character/characterDetailSlice'

function CharacterDetail() {
    const {id}=useParams()
    const dispatch=useDispatch()
    const {characterItems,loading}=useSelector(state=>state.characterDetail)
    useEffect(()=>{
        dispatch(getCharacterDetailAsync(id))
    },[])
    console.log(characterItems)
    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    return (
        <div className='character-detail-page'>
            <div className='character-detail-card'>
            <img src={characterItems?.image}/>
            <div className='character-detail-info'>
                <p className='character-name'>{characterItems?.name}</p>
                <p><span>Species: </span>{characterItems?.species}</p>
                <p><span>Gender: </span>{characterItems?.gender}</p>
                <p><span>Origin: </span>{characterItems?.origin?.name}</p>
            </div>
            </div>
        </div>
    )
}

export default CharacterDetail

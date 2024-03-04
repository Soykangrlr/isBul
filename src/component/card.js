import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Card(props) {
    const {character,handleFavoriteClick}=props
    const {data}=useSelector(state=>state.favorite)
    const isCharacterInFavorites = data.some(item => item.id === character.id);
    return (
        <div className="character-card" key={character.id}>
            <img src={character.image} alt={character.name} />
            <div className="character-details">
                <Link to={"detail/"+character.id}> 
              <p>{character.name}</p>
              </Link>
              <div className='character-card-info'>
                <div style={{
                    width:"10px",
                    height:"10px",
                    borderRadius:"100%",
                    backgroundColor:character.status==='Alive'?"green":"grey"
                }}></div>
              <span> {character.status} -</span>
              <span>{character.species}</span>
             
              </div>
              {isCharacterInFavorites ? (
                    <button onClick={handleFavoriteClick}>Remove Favorite</button>
                ) : (
                    <button onClick={handleFavoriteClick}>Add Favorite</button>
                )}
             
            </div>
          </div>
    )
}

export default Card

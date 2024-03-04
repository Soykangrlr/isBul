import {
    Route,
    Routes,
  } from "react-router-dom";
  import React from 'react'
import HomePage from "./homePage";
import CharacterDetail from "./characterDetail";
import LocationPage from "./locationPage";
import FavoritePage from "./favoritePage";
  
  function Index() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="detail/:id" element={<CharacterDetail/>}/>
                <Route path="location" element={<LocationPage/>}/>
                <Route path="favorite" element={<FavoritePage/>}/>
            </Routes>
        </div>
    )
  }
  
  export default Index
  
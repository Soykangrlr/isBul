import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./character/characterSlice";
import characterDetailSlice from "./character/characterDetailSlice";
import locationSice from "./location/locationSice";
import favoriteSlice from "./favorite/favoriteSlice";

export const store=configureStore({
    reducer:{
        character:characterSlice,
        characterDetail:characterDetailSlice,
        location:locationSice,
        favorite:favoriteSlice
    }
})
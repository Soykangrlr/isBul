import { createSlice } from "@reduxjs/toolkit";


const favoriteSlice=createSlice({
    name:'favorite',
    initialState:{
        data:[],
       
    },
    reducers:{
        addFavoriteReducer:(state,action)=>{
            const existingCharacterIndex = state.data.findIndex(item => item.id === action.payload.id);
    if (existingCharacterIndex !== -1) {
        // Karakter zaten favorilerde, bu yüzden onu kaldırın
        state.data.splice(existingCharacterIndex, 1);
    } else {
        // Karakter favorilerde değil, bu yüzden ekleyin
        state.data.push(action.payload);
    }
        }
    }
})
export const {addFavoriteReducer}=favoriteSlice.actions
export default favoriteSlice.reducer
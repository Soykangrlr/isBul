import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCharacterByID } from "../../api/character";

export const getCharacterDetailAsync=createAsyncThunk('character/getCharacterByID' ,async (id)=>{
    console.log('detailSlice')
    const response= await getCharacterByID(id)
    return response.data
})
const charecterDetailSlice=createSlice({
    name:'character ',
    initialState:{
        characterItems:[],
        loading:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCharacterDetailAsync.pending, (state)=>{
            state.loading=true
        }).addCase(getCharacterDetailAsync.fulfilled, (state, action)=>{
            state.characterItems=action.payload
            state.loading=false
        }).addCase(getCharacterDetailAsync.rejected, (state,action)=>{
            console.log(action.error.message)
        })
    }
})

export default charecterDetailSlice.reducer
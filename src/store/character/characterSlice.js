import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCharacter } from "../../api/character";


export const getAllCharacterAsync=createAsyncThunk('character/getAllCharacter' ,async ({page,search=''})=>{
    const response= await getAllCharacter(page,search)
    return response.data
})
const charecterSlice=createSlice({
    name:'charecter ',
    initialState:{
        data:[],
        info:{},
        loading:false
    },
    reducers:{
      
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllCharacterAsync.pending, (state)=>{
            state.loading=true
        }).addCase(getAllCharacterAsync.fulfilled, (state, action) => {
            state.data = action.payload.results;
            state.info = action.payload.info;
            state.loading = false;
          }).addCase(getAllCharacterAsync.rejected, (state,action)=>{
            state.loading=false
            state.data=[]
            console.log(action.error.message)
        })
    }
})

export default charecterSlice.reducer
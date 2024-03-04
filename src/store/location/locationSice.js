import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLocation } from "../../api/location";

export const getLocationAsync = createAsyncThunk('location/getLocationAsync', async ( {page = 1 }) => {
  
    const response = await getLocation({ page});
    
    return response.data;
});

const locationSlice = createSlice({
    name: 'character',
    initialState: {
        dataLocation: [],
        loadingLocation: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLocationAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(getLocationAsync.fulfilled, (state, action) => {
                state.dataLocation = action.payload;
                state.loading = false;
            })
            .addCase(getLocationAsync.rejected, (state, action) => {
                console.log(action.error.message);
            });
    }
});

export default locationSlice.reducer;
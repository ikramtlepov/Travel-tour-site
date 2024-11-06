import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    destinations : [],
    filteredDestinations: [],
    isDestLoad : false,
    isDestErr : null
}

const destinationSlice = createSlice({
    name : "destination",
    initialState ,
    reducers : {
        fetchingDestData : (state) =>{
            state.isDestLoad = true
         },
         fetchedDestData : (state,action) =>{
            state.isDestLoad = false,
            state.destinations = action.payload
         },
         fetchedDestDataErr : (state,action) =>{
            state.isDestLoad = false,
            state.isDestErr = action.payload
         },
         filterDestinations: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.filteredDestinations = state.destinations.filter(dest =>
              dest.name.toLowerCase().includes(searchTerm) || 
              dest.country.toLowerCase().includes(searchTerm)
            );}
    }
})



export const {fetchingDestData, fetchedDestData,fetchedDestDataErr} = destinationSlice.actions
export default  destinationSlice.reducer

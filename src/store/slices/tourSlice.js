import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tours : [],
    isTourLoad : false,
    isTourErr : null
}

const tourSlice = createSlice({
    name : "tour",
    initialState ,
    reducers : {
        fetchingTourData : (state) =>{
            state.isTourLoad = true
         },
         fetchedTourData : (state,action) =>{
            state.isTourLoad = false,
            state.tours = action.payload
         },
         fetchedTourDataErr : (state,action) =>{
            state.isTourLoad = false,
            state.isTourErr = action.payload
         }
    }
})



export const {fetchingTourData, fetchedTourData,fetchedTourDataErr} = tourSlice.actions
export default  tourSlice.reducer
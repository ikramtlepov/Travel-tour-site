import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    showSidebar: false,
    selectedDest:null,
    accstatus:localStorage.getItem("travel-token")?.length>0? true : false,
    isSignUp: true
}


const pageActionSlice = createSlice(
    {
        name: "page-actions",
        initialState,
        reducers: {
            toggleSidebar: (state) => {
                state.showSidebar = !state.showSidebar
            },
            setSelectedDest: (state, action) => {
                state.selectedDest = action.payload
            },
            toggleSignUp: (state) => {
                state.isSignUp = !state.isSignUp;
            }
        }
    }
)


export const { toggleSidebar, setSelectedDest,toggleSignUp } = pageActionSlice.actions


export default pageActionSlice.reducer
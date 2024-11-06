import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    showSidebar: false,
    selectedDest:null,
    accstatus:localStorage.getItem("travel-token").length>0? true : false
}


const pageActionSlice = createSlice(
    {
        name: "page-actions",
        initialState,
        reducers: {
            toggleSidebar: (state) => {
                state.showSidebar = !state.showSidebar
            },
            setSelectLang: (state, action) => {
                state.selectedLang = action.payload
            },
            setSelectedDest: (state, action) => {
                state.selectedDest = action.payload
            }
        }
    }
)


export const { toggleSidebar, toggleLang, setSelectLang,setSelectedDest } = pageActionSlice.actions


export default pageActionSlice.reducer
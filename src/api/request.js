import axios from "axios"
import { fetchedDestData, fetchedDestDataErr, fetchingDestData } from "../store/slices/destinationSlice"
import { fetchedTourData, fetchedTourDataErr, fetchingTourData } from "../store/slices/tourSlice"

export const getAllDestData = (url) => {
    return async (dispatch) => {
        dispatch(fetchingDestData())
        try {
            const res = await axios.get(url)
            dispatch(fetchedDestData(res.data))
        } catch (err) {
            dispatch(fetchedDestDataErr(err.message))
        }
    }
}


export const getAllTourData = (url) => {
    return async (dispatch) => {
        dispatch(fetchingTourData())
        try {
            const res = await axios.get(url)
            dispatch(fetchedTourData(res.data))
        } catch (err) {
            dispatch(fetchedTourDataErr(err.message))

        }
    }
}
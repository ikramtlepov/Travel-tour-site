import { configureStore } from "@reduxjs/toolkit";
import destinationSlice from "./slices/destinationSlice";
import tourSlice from "./slices/tourSlice";
import pageActionSlice from "./slices/pageActionSlice";

export const store = configureStore(
    {
        reducer : {
            destinationSlice,
            tourSlice,
            pageActionSlice
        }
    }
)
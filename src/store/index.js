import { configureStore } from "@reduxjs/toolkit";
import photoesSlice from "./slices/photoesSlice";

export const store = configureStore({
    reducer: {
        photo: photoesSlice
    }
})
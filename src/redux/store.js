import { configureStore } from "@reduxjs/toolkit";
import bookSlice from './Slices/bookSlice';

const store = configureStore({
    reducer: {
        books: bookSlice
    }
})

export default store;
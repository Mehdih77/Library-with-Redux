import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import bookSlice from './Slices/bookSlice';

const store = configureStore({
    reducer: {
        books: bookSlice,
        auth: authSlice
    }
})

export default store;
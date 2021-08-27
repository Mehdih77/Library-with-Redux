import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRandomUser = createAsyncThunk("auth/fetchRandomUser" , async() => {
    //! await is IMPORTANT
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    return data.results[0]
})


const initialState = {
    isLoggedIn: true,
    user: {},
    loading: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut(state,action) {
            state.isLoggedIn = false
        }
    },
    extraReducers: {
        [fetchRandomUser.fulfilled]: (state,action) => {
            state.loading = false;
            state.user = action.payload
        }
    }
});

export const {logOut} = authSlice.actions;

export default authSlice.reducer;
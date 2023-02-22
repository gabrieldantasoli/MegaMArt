import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    userName: null,
    userEmail: null,
    userId: null
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        SET_ACTIVE_USER: (state, action) => {
            const {email, userName, userID} = action.payload;
            state.isLoggedIn = true;
            state.userEmail = email;
            state.userName = userName;
            state.userId = userID;
        },
        REMOVE_ACTIVE_USER: (state, action) => {
            state.isLoggedIn = false;
            state.userName = null;
            state.userEmail = null;
            state.userId = null;
        }
    }
})

export const {SET_ACTIVE_USER, REMOVE_ACTIVE_USER} = UserSlice.actions;

export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectEmail = (state) => state.user.userEmail;
console.log(selectEmail);
export const selectUserName = (state) => state.auth.userName;
export const selectUSerId = (state) => state.user.userId;

export default UserSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const userReducer = createSlice({
    name: 'user',
    initialState: {
        uid: Cookies.get('uid')
    },
    reducers: {
        setUid: (state, action) => {
            state.uid = action.payload
        },
        getUid: (state) => {
            return state.uid
        }
    }
})

export const { setUid, getUid } = userReducer.actions

export const selectUser = (state) => state.user.uid

export default userReducer.reducer
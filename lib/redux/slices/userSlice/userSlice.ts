import { CartT, UserT } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import { getAllUserCartsAPI, getAllUsersAPI, getSingleUserAPI, updateUserAPI } from "./thunk";

const initialState:{users:UserT[], user:UserT, cards:CartT} = {
    users: [],
    user: {} as UserT,
    cards: {} as CartT
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (build) => {
        build.addCase(getAllUsersAPI.fulfilled, (state, action) => {
            state.users = action.payload
        }).addCase(getSingleUserAPI.fulfilled, (state,action) => {
            state.user = action.payload
        }).addCase(updateUserAPI.fulfilled, (state, action) => {
            state.user = action.payload
        }).addCase(getAllUserCartsAPI.fulfilled, (state, action) => {
            state.cards = action.payload
        })
    }
})
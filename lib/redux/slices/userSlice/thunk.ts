import { UserT } from "@/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsersAPI = createAsyncThunk(
    "getAllUsers", 
    async () => {
        const {data} = await axios.get("https://dummyjson.com/users")
        return data.users
    }
)

export const getSingleUserAPI = createAsyncThunk(
    "getSingleUser",
    async (id:number) => {
        const {data} = await axios.get("https://dummyjson.com/users/" + id)
        return data
    }
)

export const updateUserAPI = createAsyncThunk(
    "updateUser", 
    async ({id, obj}:{id: number, obj:UserT}) => {
        const {data} = await axios.put("https://dummyjson.com/users/" + id, obj)
        return data
    }
)

export const getAllUserCartsAPI = createAsyncThunk(
    "getAllUserCarts", 
    async (id:number) => {
        const {data} = await axios.get("https://dummyjson.com/carts/user/" + id)
        return data.carts
    }
)
import { ProductsT } from "@/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


export const getAllProductsAPI = createAsyncThunk(
    "get Products",
    async () => {
        const {data} =  await axios.get("https://dummyjson.com/products")
        return data.products
    }
)

export const getSingleProductAPI = createAsyncThunk(
    "get Single", 
   async (id:number) => {
        const {data} = await axios.get("https://dummyjson.com/products/" + id)
        return data
   }
)

export const getAllCategoriesAPI = createAsyncThunk(
    "get Cats",
    async () => {
        const {data} = await axios.get('https://dummyjson.com/products/categories')
        return data
    }
)

export const getProdByCatAPI = createAsyncThunk(
    "get ProdByCategory",
    async (str:string) => {
        const {data} = await axios.get("https://dummyjson.com/products/category/" + str)
        return data.products
    }
)

export const updateProdAPI = createAsyncThunk(
    "update Prod", 
    async ({id, obj}:{id:number, obj:ProductsT}) => {
        const {data} = await axios.put("https://dummyjson.com/products/" + id, obj)
        return data
    }
)

export const addProdAPI = createAsyncThunk(
    "add Prod",
    async (obj:ProductsT) => {
        const {data} = await axios.post("https://dummyjson.com/products/add", obj)
        return data
    }
)
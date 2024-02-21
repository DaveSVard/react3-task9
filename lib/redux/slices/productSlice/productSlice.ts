import { ProductsT } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import { getAllProductsAPI, getSingleProductAPI, getAllCategoriesAPI, getProdByCatAPI, updateProdAPI, addProdAPI } from "./thunk";

const initialState:{products:ProductsT[], product:ProductsT, categories:string[]} = {
    products: [],
    product: {} as ProductsT,
    categories: []
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state.products = action.payload
        },
        addProduct: (state, action) => {
            state.product = action.payload
        },
        addCategories: (state, action) => {
            state.categories = action.payload
        }
    },
    extraReducers: (build) => {
        build.addCase(getAllProductsAPI.fulfilled, (state, action) => {
            state.products = action.payload
        }).addCase(getSingleProductAPI.fulfilled, (state, action) => {
            state.product = action.payload
        }).addCase(getAllCategoriesAPI.fulfilled, (state, action) => {
            state.categories = action.payload
        }).addCase(getProdByCatAPI.fulfilled, (state, action) => {
            state.products = action.payload
        }).addCase(updateProdAPI.fulfilled, (state,action) => {
            state.product = action.payload
        }).addCase(addProdAPI.fulfilled, (state, action) => {
            state.product = action.payload
        })
    }
})

export const {addProducts, addProduct, addCategories} = productSlice.actions
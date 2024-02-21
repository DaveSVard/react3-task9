"use client"

import { useForm } from "react-hook-form"
import "./../styles/Products.scss"
import { ProductsT } from "@/type"
import { addProdAPI, getAllCategoriesAPI, selectProduct, useDispatch, useSelector } from "@/lib/redux"
import { useEffect } from "react"

export default function Add () {
    const {categories} = useSelector(selectProduct)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCategoriesAPI())
    }, [])
    const {register, handleSubmit, formState: {errors}} = useForm<ProductsT>()
    const addProd = (data:ProductsT):void => {
        dispatch(addProdAPI(data)).unwrap().then(console.log)
    }
    return(
        <div className="show">
            <h3>Add Product</h3>
            <div className="container">
                <form className="form" onSubmit={handleSubmit(addProd)}>
                    <input placeholder="Enter product title" {...register("title", {
                        required: "Enter product title!"
                    })}/>
                    {errors.title && <p className="errors">{errors.title.message}</p>}
                    <input placeholder="Enter product price" {...register("price", {
                        required: "Enter product price!",
                        pattern: {
                            value: /^\d+$/,
                            message: "Use only numbers"
                        }
                    })}/>
                    {errors.price && <p className="errors">{errors.price.message}</p>}
                    <select className="select width" {...register("category", {
                        required: "Choose product category!"
                    })}>
                        <option value="" hidden>Choose Category</option>
                        {categories.map((elm, i) => {
                            return(
                                <option key={i} value={elm}>{elm}</option>
                            )
                        })}
                    </select>
                    {errors.category && <p className="errors">{errors.category.message}</p>}
                    <input placeholder="Enter product description" {...register("description", {
                        required: "Enter product description!"
                    })}/>
                    {errors.description && <p className="errors">{errors.description.message}</p>}
                    
                    <button className="btn">Add product</button>
                </form>
            </div>
        </div>
    )
}
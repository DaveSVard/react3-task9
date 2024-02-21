"use client"

import { getSingleProductAPI, selectProduct, updateProdAPI, useDispatch, useSelector } from "@/lib/redux";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import "./../../styles/Products.scss"
import { ProductsT } from "@/type";
import { useForm } from "react-hook-form";

export default function id() {
  const {id} = useParams()
  const {product} = useSelector(selectProduct)
  const dispatch = useDispatch()
  const {register, handleSubmit, reset, formState: {errors}} = useForm<ProductsT>()
    const upProd = (data:ProductsT):void => {
        
        if(!data.title) data.title = product.title
        if(!data.category) data.category = product.category
        if(!data.price) data.price = product.price
        if(!data.description) data.description = product.description

        if(id) dispatch(updateProdAPI({id: +id, obj: {...data}}))
    }
    
  useEffect(() => {
    if(id) {
      dispatch(getSingleProductAPI(+id))
    }
  }, [id])
  console.log(product);
  
  return (
    <div className="show">
      <div className="container">
        <h1>Details</h1>
        <div className="single-prod">
        <h3>Title: {product.title}</h3>
        <p>Description: {product.description}</p>
        <p>Brand: {product.brand} Category: {product.category}</p>
        <p>Price: {product.price} Rate: {product.rating}</p>
        <div className="single-prod__icons">
          {product.images?.map((elm, i) => {
            return(
              <img src={elm} alt="" key={i}/>
            )
          })}
        </div>
        </div>
        <form className="form" onSubmit={handleSubmit(upProd)}>
                <input placeholder="Enter product title" {...register("title")}/>
                <input placeholder="Enter product description" {...register("description")}/>
                <input placeholder="Enter product price" {...register("price", {
                    pattern: {
                        value: /^\d+$/,
                        message: "Use only numbers"
                    }
                })}/>
                {errors.price && <p>{errors.price.message}</p>}

                <button className="btn">Add product</button>
            </form>
      </div>
    </div>
  );
}

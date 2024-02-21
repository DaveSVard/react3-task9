"use client";
import { getAllCategoriesAPI, getAllProductsAPI, useDispatch, useSelector } from "@/lib/redux";
import { getProdByCatAPI, selectProduct } from "@/lib/redux/slices/productSlice";
import Link from "next/link";
import { useEffect } from "react";
import "./styles/Products.scss"

export default function IndexPage() {
  const {products, categories} = useSelector(selectProduct)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProductsAPI())
    dispatch(getAllCategoriesAPI())
  }, [])
  
  return (
    <div className="show">
      <h3>Welcome</h3>
      <div className="container">
            <select className="select" onChange={(e) => dispatch(getProdByCatAPI(e.target.value))}>
            {categories.map((elm, i) => {
              return(
                <option key={i} value={elm}>{elm}</option>
              )
            })}
          </select>
          <button className="btn" onClick={() => dispatch(getAllProductsAPI())}>All products</button>
          <div className="show-info">
          {products.map(elm => {
            return(
              <div className="show-info__item" key={elm.id}>
                <p>{elm.title}</p>
                <p>{elm.description}</p>
                <img src={elm.thumbnail} alt="" />
                <Link href={"/details/" + elm.id}>See more</Link>
              </div>
            )
          })}
          </div>
      </div>
      
    </div>
 );
}


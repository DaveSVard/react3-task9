"use client"

import { useDispatch, useSelector } from "@/lib/redux"
import { getAllUserCartsAPI, getSingleUserAPI, selectUser, updateUserAPI } from "@/lib/redux/slices/userSlice"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import "./../../styles/User.scss"
import { useForm } from "react-hook-form"
import { UserT } from "@/type"

export default function Id () {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {user, cards} = useSelector(selectUser)
    const {register, handleSubmit, formState: {errors}} = useForm<UserT>()
    const addUs = (data:UserT) => {
        console.log(data);
        dispatch(updateUserAPI({id: +id, obj: {...data}})).unwrap().then(console.log)
        
    }
    useEffect(() => {
        if (id) {
            dispatch(getSingleUserAPI(+id))
            dispatch(getAllUserCartsAPI(+id))
        }
    }, [id])
    console.log(cards); // cardsy stanum em bayc tvyalnery cuyc talus chen erevum
    
    return(
        <div className="show">
            <div className="container">
                <h3>User</h3>
                <div className="users">
                   <div className="users-info">
                        <p>{user.firstName} {user.lastName}</p>
                        <p>age: {user.age} gender: {user.gender} email: {user.email} </p>
                        <p>Phone: {user.phone}</p>
                        <h3>User Cards</h3>
                        {/* <p style={{color : "red"}}>{cards.id}</p> */}
                        {/* {cards && <p>{cards.id}</p>}
                        <p>{cards.id}</p> */}
                        {/* {cards.products?.map(elm => {
                            return(
                                <div key={elm.id}>
                                    <p>Text</p>
                                    <p>{elm.title}</p>
                                </div>
                            )
                        })} */}
                   </div>
                </div>
                <form className="form" onSubmit={handleSubmit(addUs)}>
                    <input placeholder="Enter firstName" {...register("firstName")}/>
                    <input placeholder="Enter lastName" {...register("lastName")}/>
                    <input placeholder="Enter email" {...register("email")}/>
                    <input placeholder="Enter phone" {...register("phone")}/>
                    <input placeholder="Enter username" {...register("username")}/>
                    <button className="btn">Update info</button>
                </form>
            </div>
        </div>
    )
}
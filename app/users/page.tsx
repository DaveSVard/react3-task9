"use client"
import { useDispatch, useSelector } from "@/lib/redux"
import "./../styles/User.scss"
import { getAllUsersAPI, selectUser } from "@/lib/redux/slices/userSlice"
import { useEffect } from "react"
import Link from "next/link"

export default function Users () {
    const {users} = useSelector(selectUser)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsersAPI())
    }, [])
    return(
        <div className="show">
            <div className="container">
                <h3>Show Users</h3>
                <div className="users">
                    {users.map(elm => {
                        return( 
                            <div key={elm.id} className="users-info">
                                <p>{elm.firstName} {elm.lastName}</p>
                                <Link href={"/userDetails/" + elm.id}>See more</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Users.module.css"

const Users=(props) =>{


        
        let pagesCount = Math.ceil (props.totalUsers/ props.pageSize)

        let pages = []
        for ( let i=1; i <= pagesCount; i++){
            pages.push(i)
        }
        
        
        
        
        return <div>

            <div>
                {pages.map( p => {
                        return <span className={props.pageNumber === p && s.activePage}
                        onClick={()=>{props.onPageChanged(p)}}>
                        {p}
                        </span>
                    }
                )}



            </div>
                {props.users.map(u => <div key={u.id}>

                    <div>
                      <NavLink to={'/profile/'+u.id}>
                        <img src={u.photos.small} className={s.avatar} alt="" />
                        </NavLink>

                        {u.followed ?
                            <button onClick={() => props.unFollow(u.id)}>UNFOLLOW</button> :
                            <button onClick={() => props.follow(u.id)}>FOLLOW</button>}

                    </div>

                    <div>{u.name}</div>
                    <div>{u.id}</div>
                    {/* <div>{u.status}</div> */}
                    {/* <div>{u.location.city}</div> */}
                    {/* <div>{u.location.country}</div> */}



                </div>)}


        </div>
         
    }

export default Users















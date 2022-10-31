
import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { UserAPI } from "../../../api/api";
import Paginator from "../../../common/paginator";
import User from "./User/User";
import s from "./Users.module.css"

const Users = ({pageNumber,users,
  followingInProgress,onPageChanged,
   totalUsers,pageSize,follow,unFollow,...props}) => {





  return <div>

      
    <Paginator pageNumber = {pageNumber} 
    totalUsers= {totalUsers} 
    onPageChanged={onPageChanged} 
    pageSize={pageSize} />


    {users.map(u=> <User user={u}
        key ={u.id}
        followingInProgress={followingInProgress}
        follow={follow}
        unFollow={unFollow}
      />
  
    )}

  </div>

}

export default Users















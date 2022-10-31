
import { NavLink } from "react-router-dom";
import s from "../Users.module.css"

const User = ({user,followingInProgress,follow,unFollow,key}) => {




  return <div>

      <div key={{key}}>
        <NavLink to={'/profile/' + user.id}>
          <img src={user.photos.small} className={s.avatar} alt="" />
        </NavLink>

        {user.followed ?
          <button disabled={followingInProgress.some(id => id === user.id) } onClick={() => {
            unFollow(user.id)
                      }}>UNFOLLOW</button> :

          <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
            follow(user.id)
            debugger
          
          }}>FOLLOW</button>}

      </div>

      <div>{user.name}</div>
      <div>{user.id}</div>
      {/* <div>{user.status}</div> */}
      {/* <div>{user.location.city}</div> */}
      {/* <div>{user.location.country}</div> */}



    </div>}




export default User


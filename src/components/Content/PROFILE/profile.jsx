import { Navigate } from "react-router-dom"
import MyPosts from "./MyPosts/MyPosts"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./profileInfo/ProfileInfo"


const Profile = (props) => {
  // if (!props.auth.isAuth) return <Navigate to="/login"/>
    return(
            <div>
                <ProfileInfo profile={props.profile} authUser={props.auth.userId} 
                getStatus={props.getStatus}
                status={props.status}
                 getUserProfile ={props.getUserProfile}
                 updateStatus={props.updateStatus}/>
                <MyPostsContainer store={props.store}/>
            </div>

    )
}

export default Profile

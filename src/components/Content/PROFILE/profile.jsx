import MyPosts from "./MyPosts/MyPosts"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./profileInfo/ProfileInfo"

const Profile = (props) => {
    return(
            <div>
                <ProfileInfo profile={props.profile} setUserProfile ={props.setUserProfile}/>
                <MyPostsContainer store={props.store}/>
            </div>

    )
}

export default Profile

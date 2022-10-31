import MyPosts from "./MyPosts/MyPosts"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import Profile from "./profile"
import React, { useEffect } from "react"
import { connect } from "react-redux"
import {getStatus, getUserProfile, updateStatus} from "../../../Redux/profileReducer"
import axios from "axios"
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect"
import { compose } from "redux"








const ProfileContainer = (props) => {

  // useEffect

  return (
    <div>
      <Profile profile={props.profile} 
      getStatus={props.getStatus}
      updateStatus={props.updateStatus}
      auth={props.auth}
      getUserProfile ={props.getUserProfile}
      status={props.status} />
    </div>

  )
}









// class ProfileContainer extends React.Component {
 
//   componentDidMount() {
  
    
//     axios.get(
//       'https://social-network.samuraijs.com/api/1.0/profile/'+userId
//     )
//       .then(responce => {
//         debugger
//         this.props.setUserProfile(responce.data)
//       })
//   }


//   render() {
//     return (
//       <Profile {...this.props} profile={this.props.profile} />
//     )


//   }
// }




const mapStateToProps = (state) => ({
    
      profile:state.profilePage.profile,
      auth: state.auth,
      isAuth:state.auth.isAuth,
      status:state.profilePage.status
      

})

export default compose  (connect(mapStateToProps, { getUserProfile, getStatus,updateStatus }),
  withAuthRedirect)(ProfileContainer)





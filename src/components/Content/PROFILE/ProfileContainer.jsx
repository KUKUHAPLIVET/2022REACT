import MyPosts from "./MyPosts/MyPosts"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import Profile from "./profile"
import React, { useEffect } from "react"
import { connect } from "react-redux"
import {setUserProfile} from "../../../Redux/profileReducer"
import axios from "axios"
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory"








const ProfileContainer = (props) => {

  

  return (
    <div>
      <Profile profile={props.profile} 
      setUserProfile ={props.setUserProfile} />
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
    
      profile:state.profilePage.profile

})




export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)
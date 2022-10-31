import { connect } from "react-redux"
import { follow, getUsersThunkCreator, 
  setCurrentPage, setTotalUsers, setUsers,
   toggleFollowingProgress, toggleIsFetching, unFollow} from "../../../Redux/usersReducer"
import Users from "./UserC"
import axios from "axios";
import React from "react";
import Preloader from "../../../common/preloader/Preloader";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getFollowingInProgress, getIsFetching, getPageNumber, getPageSize, getTotalUsers, getUsers } from "../../../Redux/usersSelectors";



class UsersContainer extends React.Component {


  componentDidMount() {
   this.props.getUsersThunkCreator(this.props.pageNumber,this.props.pageSize)
  }


  onPageChanged = (pageNumber) => {


    this.props.getUsersThunkCreator(pageNumber,this.props.pageSize)
    this.props.setCurrentPage(pageNumber)

  }


  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}

        <Users totalUsers={this.props.totalUsers}
          pageSize={this.props.pageSize}
          pageNumber={this.props.pageNumber}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          followingInProgress={this.props.followingInProgress}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
      </div>
    )
  }
}




const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsers: getTotalUsers(state),
    pageNumber: getPageNumber(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state), 
    isAuth: state.auth.isAuth
    
  }



}



// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (usersId) => {
//       dispatch(followUserAC(usersId))
//     },
//     unFollow: (usersId) => {
//       dispatch(unfollowUserAC(usersId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsers: (totalUsers) => {
//       dispatch(setTotalUserCountAC(totalUsers))
//     },
//     toggleIsFetching:(isFetching)=>{
//       dispatch(toggleIsFetchingAC(isFetching))
//     }


//   }
// }


// let AuthRedirectComponent = withAuthRedirect(UsersContainer2)

// const UsersContainer = connect(mapStateToProps,{follow,
//   unFollow,setUsers,setCurrentPage,setTotalUsers,
//   toggleIsFetching,toggleFollowingProgress,getUsersThunkCreator
  
// })(AuthRedirectComponent)

export default compose(
  connect(mapStateToProps,{follow,
    unFollow,setUsers,setCurrentPage,setTotalUsers,
    toggleIsFetching,toggleFollowingProgress,getUsersThunkCreator}),
    withAuthRedirect,

)(UsersContainer)


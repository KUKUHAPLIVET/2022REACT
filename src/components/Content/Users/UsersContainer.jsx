import { connect } from "react-redux"
import { followUser, setCurrentPage, setTotalUsers, setUsers, toggleIsFetching, unFollowUser} from "../../../Redux/usersReducer"
import Users from "./UserC"
import axios from "axios";
import React from "react";
import Preloader from "../../../common/preloader/Preloader";



class UsersContainer2 extends React.Component {


  componentDidMount() {
    this.props.toggleIsFetching(true)
  

    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.pageSize}`
    )
      .then(responce => {
      
        this.props.toggleIsFetching(false)
        this.props.setUsers(responce.data.items)
        this.props.setTotalUsers(responce.data.totalCount)
      })
  }


  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.page}` )
      .then(responce => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(responce.data.items)
      })
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
          follow={this.props.followUser}
          unFollow={this.props.unFollowUser}

        />
      </div>
    )
  }
}





const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsers: state.usersPage.totalUsers,
    pageNumber: state.usersPage.pageNumber,
    isFetching: state.usersPage.isFetching,
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


const UsersContainer = connect(mapStateToProps,{followUser,
  unFollowUser,setUsers,setCurrentPage,setTotalUsers,toggleIsFetching
})(UsersContainer2)


export default UsersContainer
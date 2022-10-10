import { connect } from "react-redux"
import { followUserAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, unfollowUserAC } from "../../../Redux/usersReducer"
import Users from "./UserC"
import axios from "axios";
import React from "react";



class UsersContainer2 extends React.Component {
    

    componentDidMount(){
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.pageSize}`
            )
            .then(responce => {
                this.props.setUsers(responce.data.items)
                this.props.setTotalUsers(responce.data.totalCount)
            })
        }
         

    onPageChanged = (pageNumber)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.page}`
          )
          .then(responce => {
            this.props.setUsers(responce.data.items)
        })
    }


    render() {
        return <Users totalUsers={this.props.totalUsers}
            pageSize={this.props.pageSize}
            pageNumber={this.props.pageNumber}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
        />
    }

}





const mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        pageNumber: state.usersPage.pageNumber
    }



}



const mapDispatchToProps = (dispatch) => {
return {
    follow : (usersId) => {
        dispatch(followUserAC(usersId))
    },
    unFollow : (usersId) => {
        dispatch(unfollowUserAC(usersId))
    },
    setUsers:(users)=>{
        dispatch(setUsersAC(users))
    },
    setCurrentPage:(pageNumber)=>{
        dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsers:(totalUsers)=>{
        dispatch(setTotalUserCountAC(totalUsers))
    }


}
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer2)


export default UsersContainer
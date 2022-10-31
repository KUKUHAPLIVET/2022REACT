import { getUsers, UserAPI } from "../api/api"

const FOLLOW_USER = "users/FOLLOW_USER"
const UNFOLLOW_USER = "users/UNFOLLOW_USER"
const SET_USERS = "users/SET_USERS"
const SET_CURRENT_PAGE = "users/SET_Cusers/URRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS"


const initialState = {
  users: [
    // {id:1, photoUrl:"https://android-obzor.com/wp-content/uploads/2022/03/a-3.jpg", followed : true , fullName:"Dmitry", status:"HI<PP?", location:{city:"ROSTOV", country:"RUSSIA"} },
  ],
  pageSize: 5,
  totalUsers: 0,
  pageNumber: 3,
  isFetching: true,
  followingInProgress:[],

}



const usersReducer = (state = initialState,action) => {
    switch (action.type) {
        case FOLLOW_USER: 
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }

        
        case UNFOLLOW_USER: 
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return { ...u, followed: false }
                }
                return u
            })
        }
        case SET_USERS :
            return  {...state, users: action.users}
        case SET_CURRENT_PAGE:

            return {...state, pageNumber:action.pageNumber}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsers:action.totalUsers}

        case TOGGLE_IS_FETCHING:
          return {...state, isFetching:action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
          return {...state,
            
             followingInProgress: action.toggleIsFetching
             
             ?[...state.followingInProgress, action.userId]
             : state.followingInProgress.filter(id=>id!=action.userId)
            }
        default: return state


    }}





export const followSuccess = (userId) => ({ type: FOLLOW_USER, userId })
export const unFollowSuccess = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber })
export const setTotalUsers = (totalUsers) => ({ type: SET_TOTAL_USERS_COUNT, totalUsers })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (toggleIsFetching,userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, toggleIsFetching,userId })



export const getUsersThunkCreator = (pageNumber, pageSize) => async (dispatch) => {

  dispatch(toggleIsFetching(true))
  const data = await UserAPI.getUsers(pageNumber, pageSize)

  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsers(data.totalCount))

}


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId))
  const response = await apiMethod(userId)

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
}

export const unFollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, UserAPI.unFollow.bind(UserAPI), unFollowSuccess)
  }
}




export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, UserAPI.follow.bind(UserAPI), followSuccess)
  }
}













export default usersReducer
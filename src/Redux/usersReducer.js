const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"

const initialState = {
    users:[
            // {id:1, photoUrl:"https://android-obzor.com/wp-content/uploads/2022/03/a-3.jpg", followed : true , fullName:"Dmitry", status:"HI<PP?", location:{city:"ROSTOV", country:"RUSSIA"} },
        ],
        pageSize:5,
        totalUsers:0,
        pageNumber:323,

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
        default: return state


    }}





export const followUserAC = (userId) => ({type:FOLLOW_USER, userId})
export const unfollowUserAC = (userId) => ({type:UNFOLLOW_USER, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC=(pageNumber) =>({type:SET_CURRENT_PAGE, pageNumber})
export const setTotalUserCountAC=(totalUsers) => ({type:SET_TOTAL_USERS_COUNT, totalUsers})

export default usersReducer
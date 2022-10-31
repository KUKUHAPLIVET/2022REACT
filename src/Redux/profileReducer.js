import { profileAPI, UserAPI } from "../api/api"

const ADD_POST ="profile/ADD-POST"
const UPDATE_NEW_POST_TEXT = "profile/UPDATE_NEW_POST_TEXT"
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_STATUS = "profile/SET_STATUS"
let initialState = {
  
        posts: [
            { id: "1", message: "HI", likes: "20" },
            { id: "2", message: "HI222", likes: "2213120" },
            { id: "3", message: "HI433", likes: "2550" },
            { id: "4", message: "HI4444", likes: "220" },
            { id: "5", message: "HI555", likes: "790" },
        ],
        newPostText: "DMITRY SAS",
        profile: null,
        status: "",
      
    }



const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            }
            let stateCopy = { ...state }
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ""
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {

            let stateCopy = { ...state }
            stateCopy.newPostText = action.text
            return stateCopy
        }
        case SET_USER_PROFILE:{
          return {...state, profile:action.profile}

        }
        case SET_STATUS:{
            return{...state,status:action.status}

        }
        default: {
            return state
        }
    }
}




export const addPostActionCreator =() =>{
    return{
        type: ADD_POST
    }
}


export const updateNewPostTextActionCreator = (text) =>{
    return { 
        type:UPDATE_NEW_POST_TEXT, text:text}}

export const setUserProfile =(profile) =>({
type:SET_USER_PROFILE, profile
})

const setStatus = (status)=>({
  type: SET_STATUS, status
})


export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(response.data))
}


export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}


export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}







export default profileReducer
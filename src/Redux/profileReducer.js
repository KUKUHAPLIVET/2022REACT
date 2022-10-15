
const ADD_POST ="ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
  
        posts: [
            { id: "1", message: "HI", likes: "20" },
            { id: "2", message: "HI222", likes: "2213120" },
            { id: "3", message: "HI433", likes: "2550" },
            { id: "4", message: "HI4444", likes: "220" },
            { id: "5", message: "HI555", likes: "790" },
        ],
        newPostText: "DMITRY SAS",
        profile: null
      
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



export default profileReducer
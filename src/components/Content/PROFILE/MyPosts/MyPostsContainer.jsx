import Post from "./Posts/Post"
import React from "react"
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../Redux/profileReducer"
import MyPosts from "./MyPosts"
import { connect } from "react-redux"



// const MyPostsContainer = (props) => {

  
//     let state = props.store.getState().profilePage    

//     // let newPostElement= React.createRef()

//     let newPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }


//     let postChangeText = (text) =>{
//         props.store.dispatch(updateNewPostTextActionCreator(text))
//     }


//     return( 
//         <MyPosts newPost={newPost} postChangeText={postChangeText} state={state} />

//     )
// }


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText : state.profilePage.newPostText
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addPostActionCreator())
        },
        onChangeMessageText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }


    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer

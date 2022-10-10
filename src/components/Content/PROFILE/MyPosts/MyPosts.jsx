import Post from "./Posts/Post"
import React from "react"



const MyPosts = (props) => {

  
    let postsElements = props.posts.
    map(p=><Post message={p.message} likes={p.likes}/>)

    // let newPostElement= React.createRef()

    let addPost = () => {
        props.sendMessage()
    }


    let onChangeText = (e) =>{
        let text = e.target.value
        props.onChangeMessageText(text)
    }


    return(
            <div>
                <div>
                    <textarea onChange={onChangeText} 
                    // ref={newPostElement}  
                    value={props.newPostText} 
                    ></textarea>
                    <button onClick={addPost}>add post
                    </button>
                       {postsElements}

                </div>
                	
            </div>

    )
}
export default MyPosts

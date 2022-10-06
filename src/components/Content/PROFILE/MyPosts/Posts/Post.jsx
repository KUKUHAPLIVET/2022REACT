

const Post = (props) => {
    return(
            <div>
                <div></div>
                 {props.message}
                <div>
                    <span>likes {props.likes} </span>
                </div>

                        
            </div>

    )
}

export default Post

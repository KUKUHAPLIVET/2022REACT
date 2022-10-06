import Post from "./Posts/Post"

const MyPosts = () => {

    let posts=[
        {message:"HI", likes:"20"},
        {message:"HI222", likes:"2213120"},
        {message:"HI433", likes:"2550"},
        {message:"HI4444", likes:"220"},
        {message:"HI555", likes:"790"},
    ]

    let postsElements = posts.map(p=><Post message={p.message} likes={p.likes}/>)
    return(
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>add post
                    </button>
                       {postsElements}



                </div>
                	
            </div>

    )
}

export default MyPosts

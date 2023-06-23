import React, { FC } from 'react';
import { postAPI } from '../services/PostService';
import { IPost } from '../models/IPost';




const PostContainer: FC = () => {
    const {data:posts} = postAPI.useFetchAllPostsQuery(10)
    
    console.log(posts);
    

    return (
        <div>
           {posts && posts.map((post: IPost) =>(
            <div key={post.id}>{post.title}</div>
           ))}
        </div>
    );
};




export default PostContainer;
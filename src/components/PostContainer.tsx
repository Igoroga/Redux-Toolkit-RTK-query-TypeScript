import React, { FC } from 'react';
import { postAPI } from '../services/PostService';
import { IPost } from '../models/IPost';
import PostItem from './PostItem';




const PostContainer: FC = () => {
    const {data,isError,isLoading} = postAPI.useFetchAllPostsQuery(100)
    const [createPost, {isLoading: loadingPost1}] = postAPI.useCreatePostMutation()
    const [updatePost] = postAPI.useUpdatePostMutation()
    const [deletePost] = postAPI.useDeletePostMutation()
    // const [createPost, {error: errorCreatePost, isLoading: loadingPost1}] = postAPI.useCreatePostMutation()

    const handleCreate = async() => {
const title = prompt()
await createPost({title, body:title } as IPost)
    }

    if(loadingPost1){
        return (
            <div>Loading Post</div>
        )
    }
    

    return (
        <div>
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h1>Идет загрузка...</h1>}
            {isError && <h1>Произошла ошибка при загрузке</h1>}
           {data && data.map((post: IPost) =>(
            <PostItem remove={deletePost} update={updatePost} key={post.id} post={post}/>
           ))}
        </div>
    );
};




export default PostContainer;
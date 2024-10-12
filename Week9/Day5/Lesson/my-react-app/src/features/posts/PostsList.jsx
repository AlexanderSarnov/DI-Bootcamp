// src/features/posts/PostsList.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './state/slice';
import Post from './Post';
import '../../post.css';

const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const postStatus = useSelector((state) => state.posts.status);
    const error = useSelector((state) => state.posts.error);

    console.log(posts);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);

    let content;

    if (postStatus === 'loading') {
        content = <p>Loading...</p>;
    } else if (postStatus === 'succeeded') {
        content = posts.map((post) => <Post key={post.id} post={post} />);
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <div>
            <h1>Posts</h1>
            {content}
        </div>
    );
};

export default PostsList;

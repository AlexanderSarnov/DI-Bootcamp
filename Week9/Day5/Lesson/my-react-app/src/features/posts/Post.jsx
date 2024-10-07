// src/features/posts/Post.jsx
import React from 'react';
import ReactionButtons from './ReactionButtons';

const Post = React.memo(({ post }) => {
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <ReactionButtons post={post} />
        </article>
    );
});

export default Post;

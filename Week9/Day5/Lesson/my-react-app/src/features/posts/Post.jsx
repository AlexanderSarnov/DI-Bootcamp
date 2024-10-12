// src/features/posts/Post.jsx
import React from 'react';
import ReactionButtons from './ReactionButtons';

// Post component with memoization to optimize performance
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

// based on post.userId filter by user.ud in the UsersBox

// src/features/posts/ReactionButtons.jsx
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { reactionAdded } from './state/slice';

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕',
};

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();

    const handleReaction = useCallback(
        (reaction) => {
            dispatch(reactionAdded({ postId: post.id, reaction }));
        },
        [dispatch, post.id]
    );

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button key={name} type="button" className="reactionButton" onClick={() => handleReaction(name)}>
                {emoji} {post.reactions[name]}
            </button>
        );
    });

    return <div>{reactionButtons}</div>;
};

export default React.memo(ReactionButtons);

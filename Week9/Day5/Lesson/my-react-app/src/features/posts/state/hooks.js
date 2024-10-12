import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { selectPosts, selectStatus } from './selectors';
import { fetchPosts, reactionAdded } from './slice';

// *here we are not only creating custom hooks, but we are optimizing them before exporting. Thus everywhere we will import them to we will have already optimized code.

export const usePostsSelector = () => {
    return useSelector(selectPosts);
};

export const usePostsStatus = () => {
    return useSelector(selectStatus);
};

export const useFetchPosts = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
};

export const useReactionAdded = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(reactionAdded());
    }, [dispatch]);
};

// if addReaction will be added to slice.js
export const useAddReaction = () => {
    const dispatch = useDispatch();
    return useCallback((id, name) => {
        dispatch(addReaction({id, name}));
    }, [dispatch]);
}

// *Here is a custom hook that fetches posts only if the status is 'idle'. This way we avoid unnecessary API calls when the status is not 'idle'.

export const useFetchPostsOptimized = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);

    const fetchPosts = useCallback(() => {
        if (status === 'idle') {
            dispatch(fetchPosts());
        }
    }, [dispatch, status]);

    return fetchPosts;
};

// *Here is a custom hook that adds a reaction only if the status is 'idle'. This way we avoid unnecessary API calls when the status is not 'idle'.

export const useReactionAddedOptimized = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);

    const reactionAdded = useCallback(() => {
        if (status === 'idle') {
            dispatch(reactionAdded());
        }
    }, [dispatch, status]);

    return reactionAdded;
};

// *In a real-world application, you would also want to handle errors and loading states, and possibly implement pagination, filtering, and sorting features. These are advanced topics that go beyond the scope of this example.

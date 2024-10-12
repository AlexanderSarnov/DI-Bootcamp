import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

import { selectPosts, selectStatus } from "./selectors";
import { fetchPosts, addreaction } from "./slice";

export const usePostsSelector = () => {
  return useSelector(selectPosts);
};

export const usePostStatus = () => {
  return useSelector(selectStatus);
};

export const useFetchPosts = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
};

export const useAddReaction = () => {
  const dispatch = useDispatch();
  return useCallback((id, name) => {
    dispatch(addreaction({ id, name }));
  }, [dispatch]);
};

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getPosts, postsStates } from "../store/slices/posts.slice";

const usePosts = () => {
  const dispatch = useAppDispatch();
  const { data, isFetching, isFetchingFirst, error } =
    useAppSelector(postsStates);

  useEffect(() => {
    // Fetch data only when the data array is empty.
    if (isFetchingFirst && data.length === 0) dispatch(getPosts());
  }, [dispatch, data, isFetchingFirst]);

  return { data, isFetching, error };
};

export { usePosts };

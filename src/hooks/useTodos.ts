import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sliceName from "../store/sliceName.state";
import { getPosts } from "../store/slices/posts.slice";

const usePosts = () => {
  const dispatch = useDispatch();
  const { data, isFetching, error } = useSelector(
    (state: unknown) => state[sliceName.todos]
  );

  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

  return { data, isFetching, error };
};

export { usePosts };

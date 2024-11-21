import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sliceName from "../store/sliceName.state";
import { getTodos } from "../store/slices/todos.slice";

const useTodos = () => {
  const dispatch = useDispatch();
  const { data, isFetching, error } = useSelector(
    (state: unknown) => state[sliceName.todos]
  );

  useEffect(() => {
    // Fetch data only when the data array is empty.
    if (data.length === 0) dispatch(getTodos());
  }, [dispatch]);

  return { data, isFetching, error };
};

export { useTodos };

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getTodos, todosStates } from "../store/slices/todos.slice";

const useTodos = () => {
  const dispatch = useAppDispatch();
  const { data, isFetching, error } = useAppSelector(todosStates);

  useEffect(() => {
    // Fetch data only when the data array is empty.
    if (data.length === 0) dispatch(getTodos());
  }, [dispatch, data]);

  return { data, isFetching, error };
};

export { useTodos };

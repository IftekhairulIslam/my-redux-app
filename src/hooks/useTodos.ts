import { useQuery } from "@tanstack/react-query";
import todoService from "../services/todoService";
import { useAppSelector } from "../store/hooks";
import { selectTodoFilters } from "../store/slices/todoFilters.slice";

export const useTodos = () => {
  const todoFilters = useAppSelector(selectTodoFilters);

  return useQuery({
    queryKey: ["todos"],
    queryFn: () => todoService.getTodos(todoFilters),
    select: (response) => response.data,
    //staleTime: 0, // Disable cache
    //retry: false, // Disable try
  });
};

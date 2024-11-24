import { useQuery } from "@tanstack/react-query";
import todoService from "../services/todoService";
import { useAppSelector } from "../store/hooks";
import { selectTodoFilters } from "../store/slices/todoFilters.slice";

export const useTodos = () => {
  const filters = useAppSelector(selectTodoFilters);

  return useQuery({
    queryKey: ["todos", filters],
    queryFn: () => todoService.getTodos(filters),
    select: (response) => response.data,
    //staleTime: 0, // Disable cache
    //retry: false, // Disable try
  });
};

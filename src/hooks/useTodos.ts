import { useQuery } from "@tanstack/react-query";
import todoService from "../services/todoService";

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: todoService.getTodos,
    //staleTime: 0, // Override global config to make caching disabled for this request
    select: (response) => response.data,
  });
};

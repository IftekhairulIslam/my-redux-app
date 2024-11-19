import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

const fetchTodos = async () => {
  const { data } = await axiosInstance.get("/todos");
  return data;
};

export const useFetchTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    //staleTime: 0, // Override global config to make caching disabled for this request
  });
};

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

const fetchPosts = async () => {
  const { data } = await axiosInstance.get("/posts");
  return data;
};

export const useFetchPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    //staleTime: 0, // Override global config to make caching disabled for this request
  });
};

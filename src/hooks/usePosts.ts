import { useQuery } from "@tanstack/react-query";
import postService from "../services/postService";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: postService.getPosts,
    //staleTime: 0, // Override global config to make caching disabled for this request
    select: (response) => response?.data,
  });
};

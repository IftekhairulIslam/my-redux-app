import { useQuery } from "@tanstack/react-query";
import postService from "../services/postService";
import { useAppSelector } from "../store/hooks";
import { selectPostFilters } from "../store/slices/postFilters.slice";

export const usePosts = () => {
  const postFilters = useAppSelector(selectPostFilters);

  return useQuery({
    queryKey: ["posts"],
    queryFn: () => postService.getPosts(postFilters),
    select: (response) => response?.data,
    //staleTime: 0, // Disable cache
    //retry: false, // Disable try
  });
};

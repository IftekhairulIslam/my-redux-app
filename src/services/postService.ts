import { PostFilters } from "../store/slices/postFilters.slice";
import httpService from "./httpService";

class PostService {
  getPosts(filters: PostFilters) {
    return httpService.get("/posts", {
      params: { _limit: filters.limit, _page: filters.page },
    });
  }
}

const postService = new PostService();
export default postService;

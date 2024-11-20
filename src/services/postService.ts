import httpService from "./httpService";

class PostService {
  getPosts() {
    return httpService.get("/posts");
  }
}

const postService = new PostService();
export default postService;

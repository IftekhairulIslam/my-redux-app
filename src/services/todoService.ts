import httpService from "./httpService";

class TodoService {
  getPosts() {
    return httpService.get("/todos");
  }
}

const todoService = new TodoService();
export default todoService;

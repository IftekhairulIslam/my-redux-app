import httpService from "./httpService";

class TodoService {
  getTodos() {
    return httpService.get("/todos");
  }
}

const todoService = new TodoService();
export default todoService;

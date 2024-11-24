import { TodoFilters } from "../store/slices/todoFilters.slice";
import httpService from "./httpService";

class TodoService {
  getTodos(filters: TodoFilters) {
    return httpService.get("/todos", {
      params: { _limit: filters.limit, _page: filters.page },
    });
  }
}

const todoService = new TodoService();
export default todoService;

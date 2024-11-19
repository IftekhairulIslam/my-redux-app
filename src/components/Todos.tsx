import { useFetchTodos } from "../hooks/fetchTodos";
import TodoType from "../types/Todo.type";

const Todos = () => {
  const { data } = useFetchTodos();
  const todos: TodoType[] = data ? data : [];

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? "Completed" : "Not Completed"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;

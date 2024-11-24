import { useTodos } from "../../hooks/useTodos";
import TodoType from "../../types/Todo.type";

const Todos: React.FC = () => {
  const { data, isFetching, error } = useTodos();

  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (data.length === 0) return <p>No data found</p>;

  return (
    <ul>
      {data.map((todo: TodoType) => (
        <li key={todo.id}>
          {todo.title} - {todo.completed ? "Completed" : "Not Completed"}
        </li>
      ))}
    </ul>
  );
};

export default Todos;

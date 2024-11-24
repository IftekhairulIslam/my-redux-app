import Todos from "./Todos";
import TodosFilters from "./TodosFilters";

const TodosIndex = () => {
  return (
    <div>
      <TodosFilters />
      <Todos />
    </div>
  );
};

export default TodosIndex;

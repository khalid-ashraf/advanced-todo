import { useParams, useOutletContext } from "react-router-dom";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const { taskTab } = useParams();
  const { todos, handleDeleteTodo, handleCompletedTodo } = useOutletContext();

  const filteredTodosList =
    taskTab === "All"
      ? todos
      : taskTab === "Completed"
      ? todos.filter((todo) => todo.complete)
      : todos.filter((todo) => !todo.complete);

  return (
    <div>
      {filteredTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todoIndex}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompletedTodo={handleCompletedTodo}
          />
        );
      })}
    </div>
  );
};
export default TodoList;

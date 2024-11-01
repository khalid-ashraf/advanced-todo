const TodoCard = ({
  todoIndex,
  todo,
  handleDeleteTodo,
  handleCompletedTodo,
}) => {
  return (
    <div className='card todo-item'>
      <p>{todo.input}</p>
      <div className='todo-buttons'>
        <button disabled={todo.complete}>
          <h6 onClick={() => handleCompletedTodo(todoIndex)}>Done</h6>
        </button>
        <button onClick={() => handleDeleteTodo(todoIndex)}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
};
export default TodoCard;

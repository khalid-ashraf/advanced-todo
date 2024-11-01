import { useState } from "react";

const TodoInput = ({ handleAddTodo }) => {
  const [input, setInput] = useState("");

  return (
    <div className='input-container'>
      <input
        type='text'
        placeholder='Add task'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          if (!input) return;

          handleAddTodo(input);
          setInput("");
        }}>
        <i className='fa-solid fa-plus'></i>
      </button>
    </div>
  );
};
export default TodoInput;

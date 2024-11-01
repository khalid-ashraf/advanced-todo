import { useState } from "react";

import Header from "../components/Header";
import Tabs from "../components/Tabs";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { Outlet } from "react-router-dom";

const Root = () => {
  const [todos, setTodos] = useState([
    {
      input: "Hello! Add your first todo!",
      complete: true,
    },
    {
      input: "Get groceries",
      complete: false,
    },
    {
      input: "Learn React",
      complete: true,
    },
    {
      input: "Learn web design",
      complete: false,
    },
    {
      input: "Call home",
      complete: false,
    },
  ]);
  const [selectedTab, setSelectedTab] = useState("Open");

  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { input: newTodo, complete: false },
    ]);
  };

  const handleCompletedTodo = (index) => {
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;

    setTodos(newTodoList);
  };

  const handleDeleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((todo, i) => index !== i));
  };

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      <TodoInput handleAddTodo={handleAddTodo} />
      <Outlet context={{ todos, handleDeleteTodo, handleCompletedTodo }} />
    </>
  );
};

export default Root;


import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Tabs from "../components/Tabs";
import TodoInput from "../components/TodoInput";

const Root = () => {
  const [todos, setTodos] = useState([
    {
      input: "Hello! Add your first todo!",
      complete: false,
    },
  ]);
  const [selectedTab, setSelectedTab] = useState("Open");

  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  const handleCompletedTodo = (index) => {
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;

    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((todo, i) => index !== i);
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  const handleSaveData = (currentTodos) => {
    localStorage.setItem("todo-app", JSON.stringify({ currentTodos }));
  };

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) return;

    let db = [];
    db = JSON.parse(localStorage.getItem("todo-app"));
    console.log(db);

    setTodos(db.currentTodos);
  }, []);

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


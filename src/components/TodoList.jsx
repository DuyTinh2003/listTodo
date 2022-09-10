import { useState, useEffect } from "react";

import TodoForm from "./TodoForm";
import Todo from "./Todo";
const TodoList = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    const response = window.localStorage.getItem("listTodo");
    const listTodo = JSON.parse(response);
    if (listTodo) {
      setTodo(listTodo);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("listTodo", JSON.stringify(todo));
  }, [todo]);
  const addTodo = (newTodo) => {
    setTodo([newTodo, ...todo]);
  };
  function deleteTodo(id) {
    const newTodo = todo.filter((item) => item.id != id);
    setTodo(newTodo);
  }
  function updateTodo(id, value) {
    const updateTodo = todo.map((item) => {
      if (item.id === id) {
        item.value = value;
      }
      return item;
    });
    setTodo(updateTodo);
  }
  function toggleComplete(id) {
    const updateTodo = todo.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodo(updateTodo);
  }
  return (
    <>
      <TodoForm addTodo={addTodo} />
      <Todo
        todo={todo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        updateTodo={updateTodo}
      />
    </>
  );
};
export default TodoList;

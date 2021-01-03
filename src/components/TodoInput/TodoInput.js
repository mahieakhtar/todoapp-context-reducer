import React, { useState, useContext } from "react";
import { TodoContext } from "../../context/todo-context";
import "./TodoInput.css";

function Todo() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleChange = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
  };

  const handleSubmit = (evt) => {
    console.log(`Add todo : ${todo}`);
    evt.preventDefault();
    const newTodo = {
      id: Math.random(),
      text: todo,
      complete: false,
    };

    addTodo(newTodo);

    setTodo("");
  };

  return (
    <div className="todo-div">
      <h3 className="todo-title">TODO APP </h3>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          className="todo-input"
          type="text"
          value={todo}
          placeholder="Enter a todo.."
          onChange={handleChange}
        />
        <button className="todo-btn">Add To Do</button>
      </form>
    </div>
  );
}

export default Todo;

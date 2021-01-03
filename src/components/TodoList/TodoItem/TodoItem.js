import React from "react";
import "./TodoItem.css";

function TodoItem({ text, complete, clickToToggle, clickToDelete }) {
  return (
    <div className="todo-Item">
      <span className="todo-text" style={{ color: complete ? "green" : "red" }}>
        {text}
      </span>
      <div>
        <button className="toggle-Btn" onClick={clickToToggle}>
          Toggle
        </button>
        <button className="delete-Btn" onClick={clickToDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

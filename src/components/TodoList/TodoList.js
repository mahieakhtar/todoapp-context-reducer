import React, { useContext } from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";
import { TodoContext } from "../../context/todo-context";

function TodoList() {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);
  return (
    <div className="todoList-div">
      <h3 className="todoList-title">TODOS</h3>
      <div className="todoList-todos">
        <TodoItem />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            complete={todo.complete}
            clickToToggle={() => toggleTodo(todo.id)}
            clickToDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;

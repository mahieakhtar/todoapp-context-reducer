import React, { useReducer } from "react";
import { TodoContext } from "./todo-context";
import todoReducer from "./todo-reducer";
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./todo-actions";

function TodoState(props) {
  const initialState = {
    todos: [],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Add todo
  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };

  // Toggle a todo
  const toggleTodo = (todoID) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: todoID,
    });
  };

  // Delete a todo
  const deleteTodo = (todoID) => {
    dispatch({
      type: DELETE_TODO,
      payload: todoID,
    });
  };
  return (
    <div>
      <TodoContext.Provider
        value={{
          todos: state.todos,
          addTodo,
          toggleTodo,
          deleteTodo,
        }}
      >
        {props.children}
      </TodoContext.Provider>
    </div>
  );
}

export default TodoState;

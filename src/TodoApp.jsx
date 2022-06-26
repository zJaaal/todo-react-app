import React, { useEffect, useReducer } from "react";
import todoReducer from "./todoReducer";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

// This fucntion executes everytime you enter the app for the first time
const init = () => {
  return JSON.parse(localStorage.getItem("TO-DOS")) || [];
};

const TodoApp = () => {
  //The useReducer use a dispath to execute an action
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("TO-DOS", JSON.stringify(todos));
  }, [todos]);

  //This function works as a comunication between father and child
  const handleAdd = (newTodo) => {
    dispatch({ type: "ADD", payload: newTodo });
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE", payload: id });
  };

  return (
    <div className="d-flex flex-column mt-2">
      <h1 className="d-flex justify-content-center">To-Do: {todos.length}</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-6">
          <TodoAdd handleAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;

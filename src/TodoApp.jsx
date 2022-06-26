import React, { useEffect, useReducer, useState } from "react";
import useForm from "./hooks/useForm";
import todoReducer from "./todoReducer";

// This fucntion executes everytime you enter the app for the first time
const init = () => {
  return JSON.parse(localStorage.getItem("TO-DOS")) || [];
};

const TodoApp = () => {
  //The useReducer use a dispath to execute an action
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("TO-DOS", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let desc = description.trim();

    if (!desc.length) return;

    const newTodo = {
      id: Date.now(),
      desc: desc,
      done: false,
    };

    dispatch({ type: "ADD", payload: newTodo });

    reset();
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const handleDone = (id) => {
    dispatch({ type: "TOGGLE", payload: id });
  };

  return (
    <div className="d-flex flex-column mt-2">
      <h1 className="d-flex justify-content-center">To-Do: {todos.length}</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li
                className="list-group-item d-flex align-items-center justify-content-between"
                key={todo.id}
              >
                <p
                  className={`${todo.done && "complete"}` /*Short circuit*/}
                  onClick={() => handleDone(todo.id)}
                >
                  #{i + 1} {todo.desc}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-6">
          <h2 className="text-center">Create To-Do</h2>
          <form onSubmit={handleSubmit} className="d-flex flex-column m-2">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Learn Node.js"
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
            />
            <button
              className=" btn btn-outline-primary btn-block mt-1"
              type="submit"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;

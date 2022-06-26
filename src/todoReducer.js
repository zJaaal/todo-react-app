import React from "react";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    // case "UPDATE":
    //   break;

    default:
      return state;
  }
};

export default todoReducer;

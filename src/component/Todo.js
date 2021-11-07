import React, { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { addtodos } from "../action/todoAction";
import TodoBody from "./TodoBody";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const todoAddHandler = (e) => {
    e.preventDefault();
    dispatch(addtodos(todo));
    setTodo("");
  };
  return (
    <div>
      <div className="todoInputContainer">
        <input
          id="todo"
          type="text"
          placeholder="Add your todos"
          onChange={(e) => setTodo(e.target.value)}
          required
          value={todo}
        />
        <button onClick={todoAddHandler}>ADD</button>
      </div>
      <TodoBody todo={todo} key={todo.id} id={todo.id} />
    </div>
  );
};

export default TodoInput;

import React from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { removetodos } from "../action/todoAction";

const TodoBody = (props) => {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const removeTodoHandler = (id) => {
    dispatch(removetodos(id));
    console.log(id);
  };
  console.log(todoList.todoItems);
  return (
    <div>
      <div className="todoBodyContainer">
        {todoList &&
          todoList.todoItems.map((item) => (
            <div key={item.id} className="todoItem">
              <span>🎈</span>
              <span>{item.todos}</span>
              <button
                onClick={() => {
                  removeTodoHandler(item.id);
                }}
              >
                REMOVE
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoBody;

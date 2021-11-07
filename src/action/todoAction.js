import { TODO_ADD_ITEM, TODO_REMOVE_ITEM } from "../constants/todoConstant";

export const addtodos = (todos, id) => async (dispatch, getState) => {
  dispatch({ type: TODO_ADD_ITEM, payload: { todos: todos, id: Date.now() } });
  localStorage.setItem("TODOS", JSON.stringify(getState().todoList.todoItems));
};

export const removetodos = (id) => (dispatch, getState) => {
  dispatch({ type: TODO_REMOVE_ITEM, payload: id });
  localStorage.setItem("TODOS", JSON.stringify(getState().todoList.todoItems));
};

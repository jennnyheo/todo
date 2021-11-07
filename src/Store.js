import { compose } from "redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { todoListReducer } from "./reducer/todoReducers";

const initialState = {
  todoList: {
    todoItems: localStorage.getItem("TODOS")
      ? JSON.parse(localStorage.getItem("TODOS"))
      : [],
  },
};

const reducer = combineReducers({
  todoList: todoListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;

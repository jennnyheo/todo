import { TODO_ADD_ITEM, TODO_REMOVE_ITEM } from "../constants/todoConstant";

export const todoListReducer = (state = { todoItems: [] }, action) => {
  switch (action.type) {
    case TODO_ADD_ITEM:
      const items = action.payload;
      return { ...state, todoItems: [...state.todoItems, items] };
    case TODO_REMOVE_ITEM:
      return {
        ...state,
        todoItems: state.todoItems.filter(
          (todos) => todos.id !== action.payload
        ),
      };

    default:
      return state;
    //   break;
  }
};

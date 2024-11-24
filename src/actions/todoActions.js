import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  FINISH_TODO,
} from "../constants/actions";

export const todoFinished = (todo, isFinished) => {
  return {
    type: FINISH_TODO,
    payload: { todo, isFinished: isFinished },
  };
};

export const addTodo = (inputText) => {
  return {
    type: ADD_TODO,
    payload: { todoText: inputText },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: { id },
  };
};

export const editTodo = (todo, todoText) => {
  return {
    type: EDIT_TODO,
    payload: { todo, todoText },
  };
};

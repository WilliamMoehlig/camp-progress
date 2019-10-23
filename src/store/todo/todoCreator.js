import { createTodo, completeTodo } from '../actionTypes';

export const createTodoCreator = todo => {
  return {
    type: createTodo,
    payload: todo,
  };
};

export const completeTodoCreator = id => {
  return {
    type: completeTodo,
    payload: id,
  };
};

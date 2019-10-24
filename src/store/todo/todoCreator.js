import axios from 'axios';

import { createTodo, completeTodo, getTodos } from '../actionTypes';

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

export const getCompletedTodoCreator = () => {
  return async (dispatch, getState) => {
    const state = getState();

    const response = await axios.get('http://localhost:3000/todos');
    const filteredTodos = response.data ? response.data.filter(a => !a.completed) : [];

    if (!state.todos.called && filteredTodos.length > 0) dispatch({ type: getTodos, payload: filteredTodos });
  };
};

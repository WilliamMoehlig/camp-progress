import { createTodo, completeTodo } from '../actionTypes';

const todoState = {};

const todoReducer = (initialState = todoState, action) => {
  const { id } = action.payload;
  switch (action && action.type) {
    case createTodo:
      return { ...initialState, [id]: action.payload };
    case completeTodo: {
      return { ...initialState, [action.payload]: { ...initialState[action.payload], completed: true } };
    }
    default:
      return initialState;
  }
};

export default todoReducer;

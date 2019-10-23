import { createTodo, completeTodo } from '../../actionTypes';

const todoState = {};

const todoReducer = (initialState = todoState, action) => {
  switch (action && action.type) {
    case createTodo:
      return { ...initialState, [action.payload.id]: action.payload };
    case completeTodo: {
      return { ...initialState, [action.payload]: { ...initialState[action.payload], completed: true } };
    }
    default:
      return initialState;
  }
};

export default todoReducer;

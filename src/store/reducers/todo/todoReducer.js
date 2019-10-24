import { createTodo, completeTodo, getTodos } from '../../actionTypes';

const todoState = {};

const todoReducer = (initialState = todoState, action) => {
  switch (action && action.type) {
    case createTodo:
      return { ...initialState, [action.payload.id]: action.payload };
    case completeTodo: {
      return { ...initialState, [action.payload]: { ...initialState[action.payload], completed: true } };
    }
    case getTodos: {
      const mappedTodos = action.payload.reduce((acc, val) => {
        return { ...acc, [val.id]: val };
      }, {});

      return { ...initialState, ...mappedTodos, called: true };
    }
    default:
      return initialState;
  }
};

export default todoReducer;

import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import todoReducer from './reducers/todoReducer';
import { createTodoCreator, completeTodoCreator } from './todoCreator';

const reducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(reducer, composeWithDevTools());

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
store.dispatch(createTodoCreator());
store.dispatch(completeTodoCreator());

// Stop listening to state updates
unsubscribe();

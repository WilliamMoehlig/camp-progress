import { combineReducers } from 'redux';
import todoReducer from './todo/todoReducer';
import notificationReducer from './notification/notificationReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  notifications: notificationReducer,
});

export default rootReducer;

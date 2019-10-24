import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools());

store.dispatch({
  type: 'ADD_NOTIFICATION',
  payload: { from: 'william', to: 'admin', subject: 'wow', date: '2019-10-24' },
});

export default store;

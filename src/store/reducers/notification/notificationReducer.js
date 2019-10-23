import { produce } from 'immer';
import { addNotification } from '../../actionTypes';

const initialState = {};

const notificationReducer = produce((draft, action) => {
  // eslint-disable-next-line default-case
  switch (action && action.type) {
    case addNotification:
      if (!draft[action.payload.to]) {
        // eslint-disable-next-line no-param-reassign
        draft[action.payload.to] = [];
      }
      draft[action.payload.to].push(action.payload);
  }
}, initialState);

export default notificationReducer;

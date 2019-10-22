import { produce } from 'immer';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

/* function counterReducer(previousState = 0, action) {
  switch (action && action.type) {
    case INCREMENT:
      return previousState + 1;
    case DECREMENT:
      return previousState - 1;
    default:
      return previousState;
  }
} */

const counterReducer = produce(
  (draft, action) => {
    // eslint-disable-next-line default-case
    switch (action && action.type) {
      case INCREMENT:
        // eslint-disable-next-line no-param-reassign
        draft.counter += 1;
        break;
      case DECREMENT:
        // eslint-disable-next-line no-param-reassign
        draft.counter -= 1;
        break;
    }
  },
  { counter: 0 }
);

export default counterReducer;

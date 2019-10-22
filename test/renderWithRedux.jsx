// ./test/react-testing-helpers
// (⚠️ <=> https://testing-library.com/docs/example-react-redux)
import React from 'react';
import { render as renderRtl } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../src/store/reducers';

export default function renderWithRedux(ui, { initialState = {}, store = createStore(reducer, initialState) } = {}) {
  return {
    ...renderRtl(ui, {
      // eslint-disable-next-line react/jsx-props-no-spreading
      wrapper: props => <Provider {...props} store={store} />,
    }),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
}

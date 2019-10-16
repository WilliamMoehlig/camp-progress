import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';

export default function RenderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({
      initialEntries: [route],
    }),
  } = {}
) {
  return {
    ...render(ui, {
      // eslint-disable-next-line react/jsx-props-no-spreading
      wrapper: props => <Router {...props} history={history} />,
    }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
}

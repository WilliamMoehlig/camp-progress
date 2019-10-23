import React from 'react';
import renderWithRedux from '../../test/renderWithRedux';
import Notification from './Notification';

describe('test Notification component', () => {
  function render(initialState = {}) {
    return renderWithRedux(<Notification />, initialState);
  }

  test('it should be the right image', () => {});

  test('it should show 0 from the initial state', () => {
    const { findByText } = render();
    findByText('(0)');
  });

  test('it should show the length of the current notification array of the user ', () => {});
});

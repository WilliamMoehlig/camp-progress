import React from 'react';
import renderWithRedux from '../../test/renderWithRedux';
import NotificationCount from './NotificationCount';

describe('test Notification component', () => {
  function render(initialState = {}) {
    return renderWithRedux(<NotificationCount />, initialState);
  }

  test('it should be the right image', () => {
    const { getByRole } = render();
    expect(getByRole('img')).toHaveProperty('src', expect.stringMatching(/public\/images\/message.png/));
  });

  test('it should show 0 from the initial state', () => {
    const { findByText } = render();
    findByText('(0)');
  });

  test('it should show the length of the current notification array of the user ', () => {});
});

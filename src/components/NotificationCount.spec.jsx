import React from 'react';
import renderWithRedux from '../../test/renderWithRedux';
import NotificationCount from './NotificationCount';
import identityContext from '../contexts/IdentityContext';
import notification from '../store/notification/notification';

describe('test Notification component', () => {
  function render(initialState = {}, currentIdentity = undefined) {
    return renderWithRedux(
      <identityContext.Provider value={{ name: currentIdentity, setIdentity: () => {} }}>
        <NotificationCount />
      </identityContext.Provider>,
      { initialState }
    );
  }

  test('it should be the right image', () => {
    const { getByRole } = render();
    expect(getByRole('img')).toHaveProperty('src', expect.stringMatching(/public\/images\/message.png/));
  });

  test('it should show 0 from the initial state', () => {
    const { findByText } = render();
    findByText('(0)');
  });

  test('it should show the length of the current notification array of the user ', () => {
    const notification1 = notification('tom', 'admin', 'my first notification', '2019-05-12');
    const notification2 = notification('admin', 'tom', 'my second notification', '2019-05-12');

    const initialState = {
      notifications: {
        [notification1.to]: [notification1],
        [notification2.to]: [notification2],
      },
    };
    const { findByText } = render(initialState, 'admin');

    findByText('(1)');
  });
});

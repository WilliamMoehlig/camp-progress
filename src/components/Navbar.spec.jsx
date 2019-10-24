import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { within } from '@testing-library/react';

import RenderWithRouter from '../../test/renderWithRouter';
import identityContext from '../contexts/IdentityContext';
import Navbar from './Navbar';

jest.mock('../components/NotificationCount', () => () => {
  return (
    <div className="notificationCount">
      <span>
        <img src="" className="notificationImage" alt="notifications" />
      </span>
      <span>(0)</span>
    </div>
  );
});

function render(currentIdentity = undefined) {
  const result = RenderWithRouter(
    <identityContext.Provider value={{ name: currentIdentity, setIdentity: () => {} }}>
      <Navbar />
    </identityContext.Provider>
  );

  return result;
}

describe('test navbar component', () => {
  test('check default navbar', () => {
    const { getByRole } = render();

    const nav = getByRole('navigation');
    const bootCamp = within(nav).getByText('Bootcamp');

    expect(getByRole('img')).toHaveAttribute('alt', 'Bootcamp Logo');
    expect(bootCamp).toHaveAttribute('href', '/');
  });

  test('renders log in when the user has not logged in', () => {
    const { queryByText } = render();

    expect(queryByText('Log In')).toBeInTheDocument();
    expect(queryByText('Log Out')).not.toBeInTheDocument();
  });

  test('renders log out when the user has logged in', () => {
    const { queryByText } = render('username');

    expect(queryByText('Log Out')).toBeInTheDocument();
    expect(queryByText('Log In')).not.toBeInTheDocument();
  });

  test('it should show notification when logged in', () => {
    const { queryByText } = render('username');
    expect(queryByText(/([0-9])/)).toBeInTheDocument();
  });

  test('it should not show notification when not logged in', () => {
    const { queryByText } = render();
    expect(queryByText(/([0-9])/)).not.toBeInTheDocument();
  });
});

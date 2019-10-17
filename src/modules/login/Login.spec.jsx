import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import Login from './Login';

describe('Login form', () => {
  test('username is focused by default', () => {
    // Arrange
    const label = 'Your username';
    // Act
    const { getByLabelText } = render(<Login />);
    // Assert
    expect(getByLabelText(label)).toHaveFocus();
  });
  test('password is of type password', () => {
    // Arrange
    const label = 'Your password';
    // Act
    const { getByLabelText } = render(<Login />);
    // Assert
    expect(getByLabelText(label)).toHaveProperty('type', 'password');
  });
  test('user is admin', () => {
    // Arrange
    const user = 'admin';
    const userLabel = 'Your username';
    const passLabel = 'Your password';
    const pass = 'secret';
    // Act
    const { queryByRole, getByLabelText } = render(<Login />);
    getByLabelText(userLabel).value = user;
    getByLabelText(passLabel).value = pass;
    fireEvent.click(queryByRole('button'));
    // Assert
    expect(queryByRole('alert')).not.toBeInTheDocument();
  });
  test('user is normal user', () => {
    // Arrange
    const user = 'user';
    const userLabel = 'Your username';
    const passLabel = 'Your password';
    const pass = 'pass';
    // Act
    const { queryByRole, getByLabelText } = render(<Login />);
    getByLabelText(userLabel).value = user;
    getByLabelText(passLabel).value = pass;
    fireEvent.click(queryByRole('button'));
    // Assert
    expect(queryByRole('alert')).not.toBeInTheDocument();
  });
  test('handle invalid user', () => {
    // Arrange
    const user = 'user';
    const userLabel = 'Your username';
    const passLabel = 'Your password';
    const pass = 'pass!';
    // Act
    const { queryByRole, getByLabelText } = render(<Login />);
    getByLabelText(userLabel).value = user;
    getByLabelText(passLabel).value = pass;
    fireEvent.click(queryByRole('button'));
    // Assert
    expect(queryByRole('alert')).toBeInTheDocument();
    expect(getByLabelText(userLabel)).toHaveFocus();
    expect(getByLabelText(userLabel).value).toBe('');
    expect(getByLabelText(passLabel).value).toBe('');
  });
});

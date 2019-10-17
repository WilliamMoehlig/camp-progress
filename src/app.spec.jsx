import React from 'react';
import RenderWithRouter from '../test/renderWithRouter';
import '@testing-library/jest-dom/extend-expect';
import { AppWithoutRouter } from './app';

jest.mock('./modules/home/home', () => () => {
  return <h1 data-testid="HomeMock">Mocked Home</h1>;
});
jest.mock('./modules/login/Login', () => () => {
  return <h1 data-testid="LoginMock">Mocked Login</h1>;
});
jest.mock('./modules/pages/notFound', () => () => {
  return <h1 data-testid="NotFoundMock">Mocked NotFound</h1>;
});

describe('App routing', () => {
  test('it should route to notFound', () => {
    // Act
    const { getByTestId, queryByTestId } = RenderWithRouter(<AppWithoutRouter />, { route: 'fs' });
    // Assert;
    getByTestId('NotFoundMock');
    expect(queryByTestId('LoginMock')).not.toBeInTheDocument();
    expect(queryByTestId('HomeMock')).not.toBeInTheDocument();
  });
  test('it should route to home', () => {
    // Act
    const { getByTestId, queryByTestId } = RenderWithRouter(<AppWithoutRouter />, { route: '/' });
    // Assert;
    getByTestId('HomeMock');
    expect(queryByTestId('LoginMock')).not.toBeInTheDocument();
    expect(queryByTestId('NotFoundMock')).not.toBeInTheDocument();
  });
  test('it should route to login', () => {
    // Act
    const { getByTestId, queryByTestId } = RenderWithRouter(<AppWithoutRouter />, { route: '/login' });
    // Assert;
    getByTestId('LoginMock');
    expect(queryByTestId('NotFoundMock')).not.toBeInTheDocument();
    expect(queryByTestId('HomeMock')).not.toBeInTheDocument();
  });
});

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, wait } from '@testing-library/react';
import { listPaged } from '../http/http';

import UserCounterBadge from './UserCounterBadge';

jest.mock('../http/http.jsx');

describe('component UserCounterBadge', () => {
  beforeEach(() => {
    listPaged.mockImplementation(() => Promise.resolve({ total: 8 }));
  });
  test('it should render as badge content', async () => {
    // Act
    const { getByRole } = render(<UserCounterBadge />);

    const span = getByRole('note');
    // Assert
    expect(span).toHaveTextContent('???');
    await wait(() => {
      expect(span).toHaveTextContent(8);
    });
  });
});

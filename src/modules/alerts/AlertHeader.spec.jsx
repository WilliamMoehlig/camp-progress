import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import AlertHeader from './AlertHeader';

describe('AlertHeader component', () => {
  test('it renders an AlertHeader within an Alert', () => {
    // Arrange
    const testId = 'alertHeaderId';
    // Act
    const { getByRole } = render(
      <AlertHeader data-testid={testId} classNames="font-weight-bold">
        Im a header
      </AlertHeader>
    );
    const alertHeader = getByRole('heading');

    // Assert
    expect(alertHeader).toHaveClass(...['alert-heading', 'font-weight-bold']);
    expect(alertHeader).toHaveTextContent('Im a header');
    expect(alertHeader).toHaveProperty('tagName', 'H4');
  });
});

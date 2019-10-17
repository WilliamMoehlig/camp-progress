import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import AlertButton from './AlertButton';

describe('component AlertButton', () => {
  test('it should execute the function passed', () => {
    // Arrange
    const variant = 'secondary';
    const size = 'large';
    const type = 'button';
    const disabled = false;
    const classes = '';
    const spyFunction = jest.fn();

    // Act
    const { getByRole } = render(
      <AlertButton
        type={type}
        disabled={disabled}
        className={classes}
        variant={variant}
        size={size}
        event={spyFunction}
      >
        <div data-testid="test-button" />
      </AlertButton>
    );
    // Assert
    const button = getByRole('button');
    fireEvent.click(button);
    expect(spyFunction).toHaveBeenCalledTimes(1);
  });
  test('it should be able to pass children', () => {
    const { getByTestId } = render(
      <AlertButton event={() => {}}>
        <p data-testid="test-button">text</p>
      </AlertButton>
    );
    // Assert
    const child = getByTestId('test-button');
    expect(child).toHaveTextContent('text');
  });
  test('it should be able to define button type', () => {
    // Arrange
    const type = 'reset';

    // Act
    const { getByRole } = render(
      <AlertButton type={type} event={() => {}}>
        <div data-testid="test-button" />
      </AlertButton>
    );

    // Assert
    const button = getByRole('button');
    expect(button).toHaveAttribute('type', 'reset');
  });

  test('it should be able to be disabled', () => {
    // Arrange
    const disabled = true;

    // Act
    const { getByRole } = render(
      <AlertButton disabled={disabled} event={() => {}}>
        <div data-testid="test-button" />
      </AlertButton>
    );

    // Assert
    const button = getByRole('button');
    expect(button).toHaveAttribute('disabled');
  });

  test('it should be able to change variant', () => {
    // Arrange
    const variant = 'link';

    // Act
    const { getByRole } = render(
      <AlertButton variant={variant} event={() => {}}>
        <div data-testid="test-button" />
      </AlertButton>
    );

    // Assert
    const button = getByRole('button');
    expect(button).toHaveClass('btn-link');
  });

  test('it should be able to pass classes', () => {
    // Arrange
    const className = 'active';

    // Act
    const { getByRole } = render(
      <AlertButton className={className} event={() => {}}>
        <div data-testid="test-button" />
      </AlertButton>
    );

    // Assert
    const button = getByRole('button');
    expect(button).toHaveClass('active');
  });

  test('it should be able to set size', () => {
    // Arrange
    const size = 'small';

    // Act
    const { getByRole } = render(
      <AlertButton size={size} event={() => {}}>
        <div data-testid="test-button" />
      </AlertButton>
    );

    // Assert
    const button = getByRole('button');
    expect(button).toHaveClass('btn-sm');
  });
});

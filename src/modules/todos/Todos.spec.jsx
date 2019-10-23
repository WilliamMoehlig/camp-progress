import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent } from '@testing-library/react';
import Todos from './Todos';
import renderWithRedux from '../../../test/renderWithRedux';

describe('Todos component', () => {
  function render(initialState = {}) {
    return renderWithRedux(<Todos />, { initialState });
  }

  test('it should have header', () => {
    const { getByRole } = render();

    expect(getByRole('heading')).toHaveTextContent('Todos');
  });

  test('it should have items remaining footer', () => {
    const initialState = {
      todos: {
        1: { id: 1, name: 'Buy bread', completed: false },
        2: { id: 2, name: 'Take out the trash', completed: true },
      },
    };

    const { getByText } = render(initialState);

    expect(getByText(/items remaining/)).toHaveTextContent('1');
  });

  test('it should add a new todo on enter in textbox', () => {
    const todoText = 'todoloo';

    const { getByRole } = render();

    const textbox = getByRole('textbox');

    fireEvent.change(textbox, { target: { value: todoText } });
    fireEvent.submit(getByRole('form'));

    expect(getByRole('listitem')).toHaveTextContent(todoText);
  });

  test('it should set state to active on check', () => {
    const todoText = 'todoloo';

    const { getByRole, queryByRole, getByText } = render();
    const textbox = getByRole('textbox');

    fireEvent.change(textbox, { target: { value: todoText } });
    fireEvent.submit(getByRole('form'));

    const listItem = getByRole('listitem');
    expect(listItem).toHaveTextContent(todoText);

    const label = getByText(todoText);

    fireEvent.click(label);

    expect(queryByRole('listitem')).not.toBeInTheDocument();
  });
});

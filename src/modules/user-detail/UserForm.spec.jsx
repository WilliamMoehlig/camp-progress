import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render as renderRtl } from '@testing-library/react';

import UserForm from './UserForm';

describe('UserForm component', () => {
  function render() {
    return renderRtl(<UserForm />);
  }

  test('it renders by default', () => {
    const { getByLabelText } = render();

    const firstName = getByLabelText('First Name');
    expect(firstName).toBeEmpty();
    expect(firstName).toHaveProperty('placeholder', 'Enter First Name');

    const lastName = getByLabelText('Last Name');
    expect(lastName).toBeEmpty();
    expect(lastName).toHaveProperty('placeholder', 'Enter Last Name');

    const family = getByLabelText('Family');
    expect(family).toHaveProperty('checked', false);
  });
});

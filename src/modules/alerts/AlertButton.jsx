import React from 'react';
import { oneOf, bool, func, string, node } from 'prop-types';
import classNames from 'classnames';

function AlertButton({ children, event, type, size, disabled, className, variant }) {
  const classSize = size !== 'none' && size === 'small' ? 'btn-sm' : 'btn-lg';
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      type={type}
      onClick={event}
      className={classNames(`btn btn-${variant}`, { [classSize]: classSize !== 'none' }, className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

AlertButton.propTypes = {
  type: oneOf(['button', 'submit', 'reset']),
  size: oneOf(['none', 'small', 'large']),
  disabled: bool,
  event: func.isRequired,
  className: string,
  children: node.isRequired,
  variant: oneOf(['primary', 'secondary', 'link']),
};

AlertButton.defaultProps = {
  type: 'button',
  size: 'none',
  disabled: false,
  className: '',
  variant: 'primary',
};

export default AlertButton;

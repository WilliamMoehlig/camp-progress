import React from 'react';
import propTypes from 'prop-types';

function AlertHeader({ children, classNames }) {
  return <h4 className={`alert-heading ${classNames}`}>{children}</h4>;
}

AlertHeader.propTypes = {
  children: propTypes.node.isRequired,
  classNames: propTypes.string,
};

AlertHeader.defaultProps = {
  classNames: '',
};

export default AlertHeader;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Credentials = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      className="icon default"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M8 16V9a2 2 0 114 0v7"></path>
      <path d="M6 15V9a4 4 0 018 0v6"></path>
      <path d="M4 13.333V9a6 6 0 0112 0v4.333"></path>
      <path d="M10 16.333V12"></path>
      <path d="M10 9.875v-.917"></path>
    </svg>
  );
};

Credentials.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Credentials.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Credentials;

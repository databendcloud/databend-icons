import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const HamburgerButton = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 20 20"
      fill={color}
      {...otherProps}
    >
      <path d="M3.312 4.98h13.334"></path>
      <path d="M3.312 9.98h13.334"></path>
      <path d="M3.312 14.98h13.334"></path>
    </svg>
  );
};

HamburgerButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

HamburgerButton.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default HamburgerButton;

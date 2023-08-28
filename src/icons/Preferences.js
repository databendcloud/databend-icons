import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Preferences = props => {
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
      <path d="M16.263 4.474h-2.21"></path>
      <path d="M11.105 3v2.947"></path>
      <path d="M11.105 4.474H3"></path>
      <path d="M5.947 9.632H3"></path>
      <path d="M8.895 8.158v2.947"></path>
      <path d="M17 9.632H8.895"></path>
      <path d="M16.263 14.79h-2.21"></path>
      <path d="M11.105 13.316v2.947"></path>
      <path d="M11.105 14.79H3"></path>
    </svg>
  );
};

Preferences.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Preferences.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Preferences;

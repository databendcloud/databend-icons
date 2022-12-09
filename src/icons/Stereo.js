import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Stereo = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M3 17V6.5L6.5 3H17v10.5L13.5 17H3z"></path>
      <path d="M13.5 6.5V17"></path>
      <path d="M6.5 3v10.5"></path>
      <path d="M3 6.5h10.5"></path>
      <path d="M17 3l-3.5 3.5"></path>
      <path d="M3 17l3.5-3.5"></path>
      <path d="M6.5 13.5H17"></path>
    </svg>
  );
};

Stereo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Stereo.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Stereo;

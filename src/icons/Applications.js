import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Applications = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className="icon default"
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M4.667 10.333v4.334a1 1 0 001 1h8.666a1 1 0 001-1v-4.334"></path>
      <path d="M3.667 7c0-.368.298-.667.666-.667h11.334c.368 0 .666.299.666.667v2.667a.667.667 0 01-.666.666H4.333a.667.667 0 01-.666-.666V7z"></path>
      <path d="M12.333 6.333V5a.667.667 0 00-.666-.667H8.333A.667.667 0 007.667 5v1.333"></path>
      <path d="M7 9.667v2"></path>
      <path d="M13 9.667v2"></path>
    </svg>
  );
};

Applications.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Applications.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Applications;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Unlink = props => {
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
      <path d="M10.789 6.68L7.548 3.438c-1.194-1.194-3.088-1.234-4.232-.09-1.145 1.145-1.105 3.04.089 4.233l3.24 3.24"></path>
      <path d="M13.298 9.196l3.241 3.241c1.194 1.193 1.348 3.031.09 4.232-1.26 1.201-3.04 1.104-4.233-.089l-3.24-3.24"></path>
      <path d="M8.85 8.782l-1.621-1.62"></path>
      <path d="M12.63 12.563l-1.62-1.62"></path>
    </svg>
  );
};

Unlink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Unlink.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Unlink;

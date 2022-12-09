import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Tickets = props => {
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
      <path d="M3.333 4.667h2.334s.333 1.666 2 1.666c1.666 0 2-1.666 2-1.666h7v10.666h-7s-.334-1.666-2-1.666c-1.667 0-2 1.666-2 1.666H3.333V4.667z"></path>
      <path d="M7.667 8.333V9"></path>
      <path d="M7.667 11v.667"></path>
      <path d="M10.333 9H14"></path>
      <path d="M10.333 11H14"></path>
    </svg>
  );
};

Tickets.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Tickets.defaultProps = {
  color: 'rgb(1, 14, 41)',
  size: '20',
  className: '',
  style: {}
};

export default Tickets;

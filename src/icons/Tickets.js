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
      viewBox="0 0 20 20"
      fill={color}
      {...otherProps}
    >
      <path d="M3 4.4h2.45s.35 1.75 2.1 1.75 2.1-1.75 2.1-1.75H17v11.2H9.65s-.35-1.75-2.1-1.75-2.1 1.75-2.1 1.75H3V4.4z"></path>
      <path d="M7.55 8.25v.7"></path>
      <path d="M7.55 11.05v.7"></path>
      <path d="M10.35 8.95h3.85"></path>
      <path d="M10.35 11.05h3.85"></path>
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
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Tickets;

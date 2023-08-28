import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Table = props => {
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
      <path d="M15.95 3H4.05C3.47 3 3 3.47 3 4.05v11.9c0 .58.47 1.05 1.05 1.05h11.9c.58 0 1.05-.47 1.05-1.05V4.05C17 3.47 16.53 3 15.95 3z"></path>
      <path d="M7.667 3v14"></path>
      <path d="M12.333 3v14"></path>
      <path d="M3 7.667h14"></path>
      <path d="M3 12.333h14"></path>
    </svg>
  );
};

Table.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Table.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Table;

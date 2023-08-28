import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Data = props => {
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
      <path d="M17 5.45v9.45c0 1.16-3.134 2.1-7 2.1s-7-.94-7-2.1V5.45"></path>
      <path d="M17 11.75c0 1.16-3.134 2.1-7 2.1s-7-.94-7-2.1"></path>
      <path d="M17 8.6c0 1.16-3.134 2.1-7 2.1s-7-.94-7-2.1"></path>
      <path d="M10 7.2c3.866 0 7-.94 7-2.1C17 3.94 13.866 3 10 3s-7 .94-7 2.1c0 1.16 3.134 2.1 7 2.1z"></path>
    </svg>
  );
};

Data.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Data.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Data;

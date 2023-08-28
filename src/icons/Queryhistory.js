import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Queryhistory = props => {
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
      <path d="M17 10V4.167C17 3.522 16.478 3 15.833 3H4.167C3.522 3 3 3.522 3 4.167v11.666C3 16.478 3.522 17 4.167 17H10"></path>
      <path d="M13.111 15.444a2.333 2.333 0 100-4.666 2.333 2.333 0 000 4.666z"></path>
      <path d="M15.056 14.667L17 16.222"></path>
      <path d="M6.111 6.889h7.778"></path>
      <path d="M6.111 10h3.111"></path>
    </svg>
  );
};

Queryhistory.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Queryhistory.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Queryhistory;

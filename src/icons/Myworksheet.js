import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Myworksheet = props => {
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
      <path d="M15.333 9.667v-3l-3-3.334h-7A.667.667 0 004.667 4v12c0 .368.298.667.666.667h3.334"></path>
      <path d="M13.333 14a1.333 1.333 0 100-2.667 1.333 1.333 0 000 2.667z"></path>
      <path d="M16 16.667a2.667 2.667 0 10-5.333 0"></path>
      <path d="M12 3.333v3.334h3.333"></path>
    </svg>
  );
};

Myworksheet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Myworksheet.defaultProps = {
  color: 'rgb(1, 14, 41)',
  size: '20',
  className: '',
  style: {}
};

export default Myworksheet;

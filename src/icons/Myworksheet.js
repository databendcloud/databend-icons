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
      viewBox="0 0 20 20"
      fill={color}
      {...otherProps}
    >
      <path d="M15.2 9.65V6.5L12.05 3H4.7a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h3.5"></path>
      <path d="M13.1 14.2a1.4 1.4 0 100-2.8 1.4 1.4 0 000 2.8z"></path>
      <path d="M15.9 17a2.8 2.8 0 10-5.6 0"></path>
      <path d="M11.7 3v3.5h3.5"></path>
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
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Myworksheet;

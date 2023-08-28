import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Return = props => {
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
      <path d="M5.722 4L3 6.333l2.722 2.723"></path>
      <path d="M3 6.333h8.942c2.677 0 4.95 2.186 5.054 4.861.11 2.827-2.225 5.25-5.054 5.25h-6.61"></path>
    </svg>
  );
};

Return.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Return.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Return;

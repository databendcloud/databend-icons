import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Dev = props => {
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
      <path d="M4.706 4l4.941 4.941-4.941 4.941"></path>
      <path d="M7.53 16h7.764"></path>
    </svg>
  );
};

Dev.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Dev.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Dev;

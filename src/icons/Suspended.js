import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Suspended = props => {
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
      <path d="M5.5 4.5h3v11h-3v-11z"></path>
      <path d="M11.5 4.5h3v11h-3v-11z"></path>
    </svg>
  );
};

Suspended.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Suspended.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Suspended;

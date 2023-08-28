import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Time = props => {
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
      <path d="M10 17a7 7 0 100-14 7 7 0 000 14z"></path>
      <path d="M10.003 5.8v4.203l2.967 2.968"></path>
    </svg>
  );
};

Time.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Time.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Time;

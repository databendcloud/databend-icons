import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const LoadingSpin = props => {
  const { color, size, ...otherProps } = props;
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
      <path d="M16 10.415A5.942 5.942 0 004.707 7.83"></path>
      <defs>
        <linearGradient
          id="paint0_linear_420_11"
          x1="4.707"
          y1="10.415"
          x2="16"
          y2="10.415"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C6CACD" stopOpacity="0"></stop>
          <stop offset=".399" stopColor="#C6CACD" stopOpacity=".5"></stop>
          <stop offset="1" stopColor="#C6CACD"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

LoadingSpin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

LoadingSpin.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default LoadingSpin;

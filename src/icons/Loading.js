import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Loading = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className="icon default"
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M17 10.941A6.994 6.994 0 003.707 7.897"></path>
      <defs>
        <linearGradient
          id="paint0_linear_2_104"
          x1="3.707"
          y1="10.941"
          x2="17"
          y2="10.941"
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

Loading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Loading.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Loading;

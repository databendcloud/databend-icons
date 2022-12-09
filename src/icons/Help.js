import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Help = props => {
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
      <path d="M10 18.333a8.307 8.307 0 005.893-2.44A8.307 8.307 0 0018.332 10a8.307 8.307 0 00-2.44-5.893A8.307 8.307 0 0010 1.667a8.307 8.307 0 00-5.893 2.44A8.307 8.307 0 001.667 10c0 2.301.932 4.384 2.44 5.893A8.307 8.307 0 0010 18.332z"></path>
      <path d="M10 11.927V10.26a2.5 2.5 0 10-2.5-2.5"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 15.677a1.042 1.042 0 100-2.083 1.042 1.042 0 000 2.083z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

Help.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Help.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Help;

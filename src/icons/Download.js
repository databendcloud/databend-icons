import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Download = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      className="icon default"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        clipRule="evenodd"
        d="M10 12.083l-5-5h3.333V2.5h3.334v4.583H15l-5 5z"
      ></path>
      <path d="M17.5 15.417h-15"></path>
      <path d="M14.167 18.333H5.833"></path>
    </svg>
  );
};

Download.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Download.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Download;

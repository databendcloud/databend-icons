import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Time = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      class="icon default"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M10 18.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"></path>
      <path d="M10.004 5l-.001 5.004 3.533 3.533"></path>
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

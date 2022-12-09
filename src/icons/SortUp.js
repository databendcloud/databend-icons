import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const SortUp = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      class="icon default"
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M9.583 3.75h8.334"></path>
      <path d="M2.083 6.667l3.334-3.334"></path>
      <path d="M5.417 3.333V17.5"></path>
      <path d="M9.583 7.917h6.667"></path>
      <path d="M9.583 12.083h5"></path>
      <path d="M9.583 16.25h3.334"></path>
    </svg>
  );
};

SortUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

SortUp.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default SortUp;

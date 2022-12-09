import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Worksheet = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      class="icon default className"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      class="className"
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M3.333 18.333V1.667h9.584l3.75 4.375v12.291H3.333z"></path>
      <path d="M8.75 11.667h-2.5v2.916h2.5v-2.916z"></path>
      <path d="M5.833 14.583h8.334"></path>
      <path d="M11.25 9.583h-2.5v5h2.5v-5z"></path>
      <path d="M13.75 7.5h-2.5v7.083h2.5V7.5z"></path>
    </svg>
  );
};

Worksheet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Worksheet.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Worksheet;

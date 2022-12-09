import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Compute = props => {
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
      <path d="M18.333 1.667H1.667v6.666h16.666V1.667z"></path>
      <path d="M18.333 11.667H1.667v6.666h16.666v-6.666z"></path>
      <path d="M4.667 5.333v-.666h.666v.666h-.666z"></path>
      <path d="M4.667 15.333v-.666h.666v.666h-.666z"></path>
      <path d="M8 5.333v-.666h.667v.666H8z"></path>
      <path d="M8 15.333v-.666h.667v.666H8z"></path>
    </svg>
  );
};

Compute.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Compute.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Compute;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Organization = props => {
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
      <path d="M1.667 2.083h16.666v3.334l-.582.35a2.917 2.917 0 01-3.002 0l-.582-.35-.583.35a2.917 2.917 0 01-3.001 0L10 5.416l-.583.35a2.917 2.917 0 01-3.001 0l-.583-.35-.582.35a2.917 2.917 0 01-3.002 0l-.582-.35V2.083z"></path>
      <path d="M17.5 10.417h-15v7.5h15v-7.5z"></path>
      <path d="M3.75 6.667v3.75"></path>
      <path d="M16.25 6.667v3.75"></path>
    </svg>
  );
};

Organization.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Organization.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Organization;

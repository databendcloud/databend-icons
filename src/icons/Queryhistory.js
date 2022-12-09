import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Queryhistory = props => {
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
      <path d="M17.5 10V3.75c0-.69-.56-1.25-1.25-1.25H3.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25H10"></path>
      <path d="M13.333 15.833a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
      <path d="M15.417 15l2.083 1.667"></path>
      <path d="M5.833 6.667h8.334"></path>
      <path d="M5.833 10h3.334"></path>
    </svg>
  );
};

Queryhistory.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Queryhistory.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Queryhistory;

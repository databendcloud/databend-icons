import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Terminal = props => {
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
      <path d="M16 4.667H4a.667.667 0 00-.667.666v9.334c0 .368.299.666.667.666h12a.667.667 0 00.667-.666V5.333A.667.667 0 0016 4.667z"></path>
      <path d="M6 8l2.333 2L6 12"></path>
      <path d="M9.667 12.667H14"></path>
    </svg>
  );
};

Terminal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Terminal.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Terminal;

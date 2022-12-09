import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ExpandLeft = props => {
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
      <path d="M16.25 2.5H3.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V3.75c0-.69-.56-1.25-1.25-1.25z"></path>
      <path d="M7.5 2.5v15"></path>
      <path d="M4.583 2.5H15"></path>
      <path d="M4.583 17.5H15"></path>
      <path d="M13.333 8.333L11.667 10l1.666 1.667"></path>
    </svg>
  );
};

ExpandLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ExpandLeft.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default ExpandLeft;

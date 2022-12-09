import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ExpandRight = props => {
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
      <path d="M2.5 3.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H3.75c-.69 0-1.25-.56-1.25-1.25V3.75z"></path>
      <path d="M13.333 2.5v15"></path>
      <path d="M6.667 8.333L8.333 10l-1.666 1.667"></path>
      <path d="M10.833 2.5h5"></path>
      <path d="M10.833 17.5h5"></path>
    </svg>
  );
};

ExpandRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ExpandRight.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default ExpandRight;

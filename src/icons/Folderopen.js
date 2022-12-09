import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Folderopen = props => {
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
      <path d="M3.333 5v10.667L5 9h10.167V7a.667.667 0 00-.667-.667H10l-1.667-2H4A.667.667 0 003.333 5z"></path>
      <path d="M15.333 15.667L16.667 9H4.937l-1.604 6.667h12z"></path>
    </svg>
  );
};

Folderopen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Folderopen.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Folderopen;

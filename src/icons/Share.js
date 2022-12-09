import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Share = props => {
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
      <path d="M14.583 6.667a2.083 2.083 0 100-4.167 2.083 2.083 0 000 4.167z"></path>
      <path d="M5.417 12.083a2.083 2.083 0 100-4.166 2.083 2.083 0 000 4.166z"></path>
      <path d="M12.5 5.656L7.224 8.852"></path>
      <path d="M7.224 11.068l5.559 3.285"></path>
      <path d="M14.583 13.333a2.083 2.083 0 110 4.167 2.083 2.083 0 010-4.167z"></path>
    </svg>
  );
};

Share.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Share.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Share;

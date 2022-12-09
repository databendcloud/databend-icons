import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const WareHouse = props => {
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
      <path d="M9.583 17.917h8.334V2.083H5.833V6.25"></path>
      <path d="M2.083 6.25h7.5v11.667h-7.5V6.25z"></path>
      <path d="M5.417 15.417h.833"></path>
      <path d="M11.667 15.417h.833"></path>
    </svg>
  );
};

WareHouse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

WareHouse.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default WareHouse;

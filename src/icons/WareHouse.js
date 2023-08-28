import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const WareHouse = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 20 20"
      fill={color}
      {...otherProps}
    >
      <path d="M9.632 17H17V3H6.316v3.684"></path>
      <path d="M3 6.684h6.632V17H3V6.684z"></path>
      <path d="M5.947 14.79h.737"></path>
      <path d="M11.474 14.79h.736"></path>
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

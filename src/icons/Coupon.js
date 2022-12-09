import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Coupon = props => {
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
      <path d="M4.75 7.5L13.5 4l1.4 3.5"></path>
      <path d="M3 7.5h14v2.1c-1.05 0-2.1.7-2.1 1.925S15.95 13.8 17 13.8v2.1H3v-2.1c1.05 0 2.1-.7 2.1-2.1 0-1.4-1.05-2.1-2.1-2.1V7.5z"></path>
      <path d="M7.55 10.785h2.1"></path>
      <path d="M7.55 12.885h4.9"></path>
    </svg>
  );
};

Coupon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Coupon.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Coupon;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ArrowLeft = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      class="icon default props.className"
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M5 9.997h10"></path>
      <path d="M10 5l-5 5 5 5"></path>
    </svg>
  );
};

ArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ArrowLeft.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default ArrowLeft;

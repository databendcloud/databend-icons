import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ArrowRight = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', props?.className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M15 9.997H5"></path>
      <path d="M10 15l5-5-5-5"></path>
    </svg>
  );
};

ArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ArrowRight.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default ArrowRight;

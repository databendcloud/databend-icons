import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ChartsPie = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M16.667 10A6.667 6.667 0 1110 3.333V10h6.667z"></path>
      <path d="M16.361 8H12V3.639A6.682 6.682 0 0116.361 8z"></path>
    </svg>
  );
};

ChartsPie.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ChartsPie.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default ChartsPie;

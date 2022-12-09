import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ChartsBarHorizontal = props => {
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
      <path d="M8.75 15v-2H5v2h3.75z"></path>
      <path d="M11.25 11V9H5v2h6.25z"></path>
      <path d="M15 7V5H5v2h10z"></path>
    </svg>
  );
};

ChartsBarHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ChartsBarHorizontal.defaultProps = {
  color: 'rgb(1, 14, 41)',
  size: '20',
  className: '',
  style: {}
};

export default ChartsBarHorizontal;

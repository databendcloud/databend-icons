import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Refresh = props => {
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
      <path d="M17.5 3.333V10"></path>
      <path d="M2.5 10v6.667"></path>
      <path d="M2.5 10a7.5 7.5 0 0012.708 5.397"></path>
      <path d="M17.5 10A7.5 7.5 0 004.604 4.792"></path>
    </svg>
  );
};

Refresh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Refresh.defaultProps = {
  color: 'rgb(1, 14, 41)',
  size: '20',
  className: '',
  style: {}
};

export default Refresh;

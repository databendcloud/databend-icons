import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const SortDown = props => {
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
      <path d="M9.514 4.324H16"></path>
      <path d="M6.595 15.027L4 12.432"></path>
      <path d="M6.595 4v11.027"></path>
      <path d="M9.514 7.568h5.189"></path>
      <path d="M9.514 10.81h3.891"></path>
      <path d="M9.514 14.054h2.594"></path>
    </svg>
  );
};

SortDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

SortDown.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default SortDown;

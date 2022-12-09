import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const OffScreen = props => {
  const { color, size, ...otherProps } = props;
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
      <path d="M13 4v3h3"></path>
      <path d="M7 4v3H4"></path>
      <path d="M7 16v-3H4"></path>
      <path d="M13 16v-3h2.966"></path>
    </svg>
  );
};

OffScreen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

OffScreen.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default OffScreen;

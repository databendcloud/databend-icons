import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const SortUp = props => {
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
      <path d="M9.684 5.316H16"></path>
      <path d="M4 7.526L6.526 5"></path>
      <path d="M6.526 5v10.737"></path>
      <path d="M9.684 8.474h5.053"></path>
      <path d="M9.684 11.632h3.79"></path>
      <path d="M9.684 14.79h2.527"></path>
    </svg>
  );
};

SortUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

SortUp.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default SortUp;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const String = props => {
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
      <path d="M4 16l6-12 6 12"></path>
      <path d="M6.571 10.857h6.858"></path>
    </svg>
  );
};

String.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

String.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default String;

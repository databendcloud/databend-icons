import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const FieldDelimiter = props => {
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
      <path d="M4 3v14"></path>
      <path d="M16.6 3v14"></path>
      <path d="M6.8 6.85h7"></path>
      <path d="M6.8 13.15h9.8"></path>
    </svg>
  );
};

FieldDelimiter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

FieldDelimiter.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default FieldDelimiter;

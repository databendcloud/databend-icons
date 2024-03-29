import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const RecordDelimiter = props => {
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
      <path d="M3 10.158h14"></path>
      <path d="M8.895 15.316h2.21"></path>
      <path d="M14.79 15.316H17"></path>
      <path d="M8.895 5h2.21"></path>
      <path d="M3 15.316h2.21"></path>
      <path d="M3 5h2.21"></path>
      <path d="M14.79 5H17"></path>
    </svg>
  );
};

RecordDelimiter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

RecordDelimiter.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default RecordDelimiter;

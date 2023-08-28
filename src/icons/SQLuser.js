import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const SqLuser = props => {
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
      <path d="M9.3 4.4v4.2c0 .773-1.41 1.4-3.15 1.4S3 9.373 3 8.6V4.4"></path>
      <path d="M9.3 6.5c0 .773-1.41 1.4-3.15 1.4S3 7.273 3 6.5"></path>
      <path d="M9.3 4.4c0 .773-1.41 1.4-3.15 1.4S3 5.173 3 4.4C3 3.627 4.41 3 6.15 3s3.15.627 3.15 1.4z"></path>
      <path d="M12.8 3.7h2.1a1.4 1.4 0 011.4 1.4v2.1"></path>
      <path d="M7.2 16.3H5.1a1.4 1.4 0 01-1.4-1.4v-2.1"></path>
      <path d="M13.85 13.5a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"></path>
      <path d="M17 17h-6.3a3.15 3.15 0 116.3 0z"></path>
    </svg>
  );
};

SqLuser.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

SqLuser.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default SqLuser;

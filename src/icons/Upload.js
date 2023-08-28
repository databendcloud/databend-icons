import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Upload = props => {
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
      <path d="M5.705 8.324a3.525 3.525 0 101.781 6.818"></path>
      <path d="M14.295 8.324a3.525 3.525 0 11-1.781 6.818"></path>
      <path d="M14.275 8.228a4.228 4.228 0 10-8.456 0"></path>
      <path d="M7.604 11.005l2.443-2.451 2.513 2.493"></path>
      <path d="M10.047 14.57V9.8"></path>
    </svg>
  );
};

Upload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Upload.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Upload;

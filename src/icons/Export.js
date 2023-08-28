import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Export = props => {
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
      <path d="M16.633 11.105c0 2.21-1.473 5.895-6.631 5.895S3.37 13.316 3.37 11.105"></path>
      <path d="M10.004 3.037v10.279"></path>
      <path d="M5.58 7.421L10.003 3l4.42 4.421"></path>
    </svg>
  );
};

Export.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Export.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Export;

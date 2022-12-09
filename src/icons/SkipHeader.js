import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const SkipHeader = props => {
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
      <path d="M16.3 4H3.7a.7.7 0 00-.7.7v11.2a.7.7 0 00.7.7h12.6a.7.7 0 00.7-.7V4.7a.7.7 0 00-.7-.7z"></path>
      <path d="M3 8.2h14"></path>
    </svg>
  );
};

SkipHeader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

SkipHeader.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default SkipHeader;

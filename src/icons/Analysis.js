import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Analysis = props => {
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
      <path d="M17 5.05C17 4.47 16.53 4 15.95 4H4.05C3.47 4 3 4.47 3 5.05V8.2h14V5.05z"></path>
      <path d="M3.04 14.86l4.26-4.305 2.304 2.206 2.815-2.461 1.568 1.529"></path>
      <path d="M17 7.5v6.65c0 .58-.47 1.05-1.05 1.05H5.8"></path>
      <path d="M8.29 6.1h6.3"></path>
      <path d="M5.489 6.1h.7"></path>
      <path d="M3 7.5v3.15"></path>
    </svg>
  );
};

Analysis.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Analysis.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Analysis;

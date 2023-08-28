import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const DocTitle = props => {
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
      <path d="M3.75 4v11.556"></path>
      <path d="M10.25 4v11.556"></path>
      <path d="M4.111 9.778H9.89"></path>
      <path d="M13.139 9.778v5.777"></path>
      <path d="M13.139 12.314c0-.926.722-1.814 1.805-1.814 1.084 0 1.806.851 1.806 1.814v3.246"></path>
    </svg>
  );
};

DocTitle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

DocTitle.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default DocTitle;

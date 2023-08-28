import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Link = props => {
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
      <path d="M10.034 4.138l-5.973 5.974a3.62 3.62 0 105.12 5.12l7.112-7.111a2.414 2.414 0 10-3.414-3.414l-7.112 7.112a1.207 1.207 0 001.707 1.707l5.974-5.974"></path>
    </svg>
  );
};

Link.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Link.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Link;

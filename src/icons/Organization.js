import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Organization = props => {
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
      <path d="M3 3h14v2.8l-.49.294a2.45 2.45 0 01-2.52 0L13.5 5.8l-.49.294a2.45 2.45 0 01-2.52 0L10 5.8l-.49.294a2.45 2.45 0 01-2.52 0L6.5 5.8l-.49.294a2.45 2.45 0 01-2.52 0L3 5.8V3z"></path>
      <path d="M16.3 10H3.7v6.3h12.6V10z"></path>
      <path d="M4.75 6.85V10"></path>
      <path d="M15.25 6.85V10"></path>
    </svg>
  );
};

Organization.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Organization.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Organization;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const SidebarBottom = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 14a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8zm1-8v6h10V6a1 1 0 00-1-1H6a1 1 0 00-1 1z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

SidebarBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

SidebarBottom.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default SidebarBottom;

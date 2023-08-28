import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const SidebarLeft = props => {
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
        d="M6 4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H6zm8 1H8v10h6a1 1 0 001-1V6a1 1 0 00-1-1z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

SidebarLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

SidebarLeft.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default SidebarLeft;

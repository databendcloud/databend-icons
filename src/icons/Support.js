import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Support = props => {
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
        clipRule="evenodd"
        d="M14.95 14.95a7 7 0 10-9.9-9.9 7 7 0 009.9 9.9zm-1.98-7.92a4.2 4.2 0 11-5.94 5.94 4.2 4.2 0 015.94-5.94z"
      ></path>
      <path d="M14.95 14.95l-1.98-1.98"></path>
      <path d="M5.05 14.95l1.98-1.98"></path>
      <path d="M5.05 5.05l1.98 1.98"></path>
      <path d="M14.95 5.05l-1.98 1.98"></path>
      <path d="M12.97 12.97a4.2 4.2 0 10-5.94-5.94 4.2 4.2 0 005.94 5.94z"></path>
    </svg>
  );
};

Support.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Support.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Support;

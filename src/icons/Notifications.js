import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Notifications = props => {
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
      <path d="M17 10a7 7 0 01-7 7H3v-7a7 7 0 1114 0z"></path>
      <path d="M6.5 7.9h6.3"></path>
      <path d="M6.5 10.7h6.3"></path>
      <path d="M6.5 13.5H10"></path>
    </svg>
  );
};

Notifications.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Notifications.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Notifications;

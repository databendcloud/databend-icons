import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Notifications = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      className="icon default"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M18.333 10A8.333 8.333 0 0110 18.333H1.667V10a8.333 8.333 0 1116.666 0z"></path>
      <path d="M5.833 7.5h7.5"></path>
      <path d="M5.833 10.833h7.5"></path>
      <path d="M5.833 14.167H10"></path>
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

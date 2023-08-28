import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Pin = props => {
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
      <path d="M4.62 7.842c1.004-1.004 2.198-.977 3.495-.265l4.852-2.69L12.692 3 17 7.308l-1.884-.27-2.693 4.847c.68 1.385.74 2.491-.265 3.496l-2.962-2.962L3 17l4.567-6.21L4.62 7.842z"></path>
    </svg>
  );
};

Pin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Pin.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Pin;

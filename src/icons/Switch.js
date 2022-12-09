import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Switch = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      class="icon default className"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      class="className"
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.067 5.183a.625.625 0 10-.884.884L13.116 8H5.625a.625.625 0 100 1.25h9a.623.623 0 00.578-.864.623.623 0 00-.132-.199m-3.004-3.004l3 3-3-3z"
        fillOpacity=".8"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.388 10.546a.622.622 0 00-.388.602.623.623 0 00.183.419l3 3a.625.625 0 10.884-.884L7.134 11.75h7.491a.625.625 0 100-1.25h-9a.622.622 0 00-.237.046z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

Switch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Switch.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Switch;

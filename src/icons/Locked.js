import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Locked = props => {
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
      <path d="M15.9 9.3H4.7a.7.7 0 00-.7.7v6.3a.7.7 0 00.7.7h11.2a.7.7 0 00.7-.7V10a.7.7 0 00-.7-.7z"></path>
      <path d="M6.8 9.3V6.5a3.5 3.5 0 017 0v2.8"></path>
      <path d="M10.3 12.1v2.1"></path>
    </svg>
  );
};

Locked.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Locked.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Locked;

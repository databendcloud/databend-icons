import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Link = props => {
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
      <path d="M10.295 3.985l-6.188 6.188a3.75 3.75 0 005.304 5.303l7.365-7.366a2.5 2.5 0 00-3.535-3.535L5.875 11.94a1.25 1.25 0 001.768 1.768l6.187-6.187"></path>
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

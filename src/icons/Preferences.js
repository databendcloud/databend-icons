import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Preferences = props => {
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
      <path d="M17.292 4.167h-2.5"></path>
      <path d="M11.458 2.5v3.333"></path>
      <path d="M11.458 4.167H2.292"></path>
      <path d="M5.625 10H2.292"></path>
      <path d="M8.958 8.333v3.334"></path>
      <path d="M18.125 10H8.958"></path>
      <path d="M17.292 15.833h-2.5"></path>
      <path d="M11.458 14.167V17.5"></path>
      <path d="M11.458 15.833H2.292"></path>
    </svg>
  );
};

Preferences.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Preferences.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Preferences;

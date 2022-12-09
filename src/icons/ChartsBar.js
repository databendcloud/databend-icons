import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ChartsBar = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M3.333 15h13.334"></path>
      <path d="M7 11.25H5V15h2v-3.75z"></path>
      <path d="M11 8.75H9V15h2V8.75z"></path>
      <path d="M15 5h-2v10h2V5z"></path>
    </svg>
  );
};

ChartsBar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ChartsBar.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ChartsBar;

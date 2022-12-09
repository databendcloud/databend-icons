import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Data = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', props?.className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M18.333 4.583v11.25c0 1.381-3.73 2.5-8.333 2.5-4.602 0-8.333-1.119-8.333-2.5V4.583"></path>
      <path d="M18.333 12.083c0 1.381-3.73 2.5-8.333 2.5-4.602 0-8.333-1.119-8.333-2.5"></path>
      <path d="M18.333 8.333c0 1.381-3.73 2.5-8.333 2.5-4.602 0-8.333-1.119-8.333-2.5"></path>
      <path d="M10 6.667c4.602 0 8.333-1.12 8.333-2.5 0-1.381-3.73-2.5-8.333-2.5-4.602 0-8.333 1.119-8.333 2.5 0 1.38 3.73 2.5 8.333 2.5z"></path>
    </svg>
  );
};

Data.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Data.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Data;

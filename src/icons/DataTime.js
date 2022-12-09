import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const DataTime = props => {
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
      <path d="M10 6.667V10l2.5 1.25"></path>
      <circle cx="10" cy="10" r="5.5"></circle>
    </svg>
  );
};

DataTime.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

DataTime.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default DataTime;

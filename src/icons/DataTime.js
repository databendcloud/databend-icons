import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const DataTime = props => {
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
      <path d="M10 6v4l3 1.5"></path>
      <circle cx="10" cy="10" r="6.5"></circle>
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

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Reduction = props => {
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
      <rect x="3" y="8.5" width="14" height="3" fillOpacity=".8"></rect>
    </svg>
  );
};

Reduction.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Reduction.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Reduction;

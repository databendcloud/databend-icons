import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Row = props => {
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
      <rect x="3" y="11" width="14" height="4"></rect>
      <rect x="3" y="5" width="14" height="4"></rect>
    </svg>
  );
};

Row.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Row.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Row;

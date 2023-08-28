import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Right = props => {
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
      <path d="M7.917 5l5 5-5 5"></path>
    </svg>
  );
};

Right.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Right.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Right;

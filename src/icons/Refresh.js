import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Refresh = props => {
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
      <path d="M16 4.667V10"></path>
      <path d="M4 10v5.333"></path>
      <path d="M4 10a6 6 0 0010.167 4.317"></path>
      <path d="M16 10A6 6 0 005.683 5.833"></path>
    </svg>
  );
};

Refresh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Refresh.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Refresh;

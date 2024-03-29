import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const More = props => {
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
      <path
        d="M5 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
        fillOpacity=".8"
      ></path>
      <path
        d="M10 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
        fillOpacity=".8"
      ></path>
      <path
        d="M15 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

More.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

More.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default More;

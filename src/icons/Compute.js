import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Compute = props => {
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
      <path d="M17 3H3v5.6h14V3z"></path>
      <path d="M17 11.4H3V17h14v-5.6z"></path>
      <path d="M5.6 6v-.4H6V6h-.4z"></path>
      <path d="M5.6 14.4V14H6v.4h-.4z"></path>
      <path d="M8.4 6v-.4h.4V6h-.4z"></path>
      <path d="M8.4 14.4V14h.4v.4h-.4z"></path>
    </svg>
  );
};

Compute.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Compute.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Compute;

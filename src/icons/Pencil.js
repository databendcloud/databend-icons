import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Pencil = props => {
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
      <path d="M3 17h3L17 6l-3-3L3 14v3z"></path>
      <path d="M11 6l3 3"></path>
    </svg>
  );
};

Pencil.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Pencil.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Pencil;

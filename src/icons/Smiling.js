import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Smiling = props => {
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
      <path d="M10 17a7 7 0 100-14 7 7 0 000 14z"></path>
      <path d="M12.45 12.45s-.7 1.4-2.45 1.4c-1.75 0-2.45-1.4-2.45-1.4"></path>
      <path d="M12.45 7.9v1.4"></path>
      <path d="M7.48 7.48v1.4"></path>
    </svg>
  );
};

Smiling.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Smiling.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Smiling;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Rename = props => {
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
      <path d="M16 10.667v4.666a.667.667 0 01-.667.667H4.667A.667.667 0 014 15.333V4.667C4 4.298 4.298 4 4.667 4h4.666"></path>
      <path d="M6.667 10.907v2.426h2.439L16 6.436 13.565 4l-6.898 6.907z"></path>
    </svg>
  );
};

Rename.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Rename.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Rename;

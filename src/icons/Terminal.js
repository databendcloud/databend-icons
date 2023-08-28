import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Terminal = props => {
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
      <path d="M16.3 4.667H3.7a.7.7 0 00-.7.7v9.8a.7.7 0 00.7.7h12.6a.7.7 0 00.7-.7v-9.8a.7.7 0 00-.7-.7z"></path>
      <path d="M5.8 8.167l2.45 2.1-2.45 2.1"></path>
      <path d="M9.65 13.067h4.55"></path>
    </svg>
  );
};

Terminal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Terminal.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Terminal;

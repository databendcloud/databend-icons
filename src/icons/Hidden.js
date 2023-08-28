import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Hidden = props => {
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
      <path d="M3.368 7c.234.45.588.866 1.04 1.236 1.266 1.038 3.299 1.71 5.59 1.71s4.324-.672 5.59-1.71c.452-.37.806-.787 1.04-1.236"></path>
      <path d="M11.832 9.947l.762 2.846"></path>
      <path d="M14.916 8.972L17 11.055"></path>
      <path d="M3 11.055l2.084-2.083"></path>
      <path d="M7.393 12.793l.763-2.846"></path>
    </svg>
  );
};

Hidden.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Hidden.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Hidden;

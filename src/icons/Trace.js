import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Trace = props => {
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
      <path d="M10 4a6 6 0 106 6"></path>
      <path d="M10 7a3 3 0 103 3"></path>
      <path d="M10 10l2.1-2.102"></path>
      <path d="M12.1 5.809V7.9h2.108L16 6.1h-2.099V4L12.1 5.809z"></path>
    </svg>
  );
};

Trace.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Trace.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Trace;

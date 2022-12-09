import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ChartsLine = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M3 3v14h14"></path>
      <path d="M6.111 13.889l3.111-6.222 3.89 3.5L17 3"></path>
    </svg>
  );
};

ChartsLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ChartsLine.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ChartsLine;

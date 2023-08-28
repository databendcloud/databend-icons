import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ChartsBarStacked = props => {
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
      <path d="M11.2 13.6H8.8V16h2.4v-2.4z"></path>
      <path d="M11.2 6.4H8.8v7.2h2.4V6.4z"></path>
      <path d="M6.4 8.8H4v4.8h2.4V8.8z"></path>
      <path d="M6.4 13.6H4V16h2.4v-2.4z"></path>
      <path d="M16 13.6h-2.4V16H16v-2.4z"></path>
      <path d="M16 4h-2.4v9.6H16V4z"></path>
    </svg>
  );
};

ChartsBarStacked.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ChartsBarStacked.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default ChartsBarStacked;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ChartsPie = props => {
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
      <path d="M17 10a7 7 0 11-7-7v7h7z"></path>
      <path d="M16.68 7.9H12.1V3.32a7.017 7.017 0 014.58 4.58z"></path>
    </svg>
  );
};

ChartsPie.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ChartsPie.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default ChartsPie;

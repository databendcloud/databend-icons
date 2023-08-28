import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ChartsPieDoughnut = props => {
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
      <path
        clipRule="evenodd"
        d="M10 17a7 7 0 007-7h-2.8A4.2 4.2 0 1110 5.8V3a7 7 0 100 14z"
      ></path>
      <path
        clipRule="evenodd"
        d="M13.638 7.9h3.042a7.016 7.016 0 00-4.58-4.58v3.042c.638.369 1.17.9 1.538 1.538z"
      ></path>
    </svg>
  );
};

ChartsPieDoughnut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ChartsPieDoughnut.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default ChartsPieDoughnut;

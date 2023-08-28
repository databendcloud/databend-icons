import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Chart = props => {
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
      <path d="M3 10s.7-7 3.5-7 3.15 5.25 3.5 7c.35 1.75 1.4 7 3.85 7S17 10 17 10"></path>
      <path d="M5.45 10h2.1"></path>
      <path d="M12.45 10h2.1"></path>
    </svg>
  );
};

Chart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Chart.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Chart;

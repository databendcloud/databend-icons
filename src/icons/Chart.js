import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Chart = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      class="icon default props.className"
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M1.667 10S2.5 1.667 5.833 1.667c3.334 0 3.75 6.25 4.167 8.333.417 2.083 1.667 8.333 4.583 8.333 2.917 0 3.75-8.333 3.75-8.333"></path>
      <path d="M4.583 10h2.5"></path>
      <path d="M12.917 10h2.5"></path>
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

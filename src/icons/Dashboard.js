import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Dashboard = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      class="icon default"
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M18.5 3.333h-15a.833.833 0 00-.833.834v11.666c0 .46.373.834.833.834h15c.46 0 .833-.373.833-.834V4.167a.833.833 0 00-.833-.834z"></path>
      <path d="M14.333 10.417v2.916"></path>
      <path d="M11 6.667v6.666"></path>
      <path d="M7.667 8.333v5"></path>
    </svg>
  );
};

Dashboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Dashboard.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Dashboard;

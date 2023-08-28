import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Dashboard = props => {
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
      <path d="M4.455 14.273a7 7 0 1111.09 0"></path>
      <path d="M6.278 12.449a4.455 4.455 0 117.443 0"></path>
      <path clipRule="evenodd" d="M10 11.91L15.09 17H4.91L10 11.91z"></path>
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

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Calendar = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default')}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M2.083 7.917h15.834v8.75c0 .46-.373.833-.834.833H2.917a.833.833 0 01-.834-.833v-8.75z"></path>
      <path d="M2.083 3.75c0-.46.373-.833.834-.833h14.166c.46 0 .834.373.834.833v4.167H2.083V3.75z"></path>
      <path d="M6.667 1.667V5"></path>
      <path d="M13.333 1.667V5"></path>
      <path d="M11.667 14.167h2.5"></path>
      <path d="M5.833 14.167h2.5"></path>
      <path d="M11.667 10.833h2.5"></path>
      <path d="M5.833 10.833h2.5"></path>
    </svg>
  );
};

Calendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Calendar.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Calendar;

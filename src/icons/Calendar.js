import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Calendar = props => {
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
      <path d="M3 8.526h14v7.737c0 .407-.33.737-.737.737H3.737A.737.737 0 013 16.263V8.526z"></path>
      <path d="M3 4.842c0-.407.33-.737.737-.737h12.526c.407 0 .737.33.737.737v3.684H3V4.842z"></path>
      <path d="M7.053 3v2.947"></path>
      <path d="M12.947 3v2.947"></path>
      <path d="M11.474 14.053h2.21"></path>
      <path d="M6.316 14.053h2.21"></path>
      <path d="M11.474 11.105h2.21"></path>
      <path d="M6.316 11.105h2.21"></path>
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

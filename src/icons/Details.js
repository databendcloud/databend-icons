import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Details = props => {
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
      <path d="M15.833 3H4.167C3.522 3 3 3.522 3 4.167v11.666C3 16.478 3.522 17 4.167 17h11.666c.645 0 1.167-.522 1.167-1.167V4.167C17 3.522 16.478 3 15.833 3z"></path>
      <path d="M8.833 5.722h-3.11v3.111h3.11v-3.11z"></path>
      <path d="M11.167 5.722h3.11"></path>
      <path d="M11.167 8.444h3.11"></path>
      <path d="M5.722 11.556h8.556"></path>
      <path d="M5.722 14.278h8.556"></path>
    </svg>
  );
};

Details.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Details.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Details;

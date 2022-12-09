import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Activity = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className="icon default"
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M3 9.452h3L8.296 3l3.667 13.333 2.704-6.881h3"></path>
    </svg>
  );
};

Activity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Activity.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Activity;

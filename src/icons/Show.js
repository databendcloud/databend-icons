import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Show = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M10 15c4.602 0 8.333-5 8.333-5S14.603 5 10 5c-4.602 0-8.333 5-8.333 5s3.73 5 8.333 5z"></path>
      <path d="M10 12.083a2.083 2.083 0 100-4.166 2.083 2.083 0 000 4.166z"></path>
    </svg>
  );
};

Show.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Show.defaultProps = {
  color: 'rgb(1, 14, 41)',
  size: '20',
  className: '',
  style: {}
};

export default Show;

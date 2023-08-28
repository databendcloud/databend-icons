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
      viewBox="0 0 20 20"
      fill={color}
      {...otherProps}
    >
      <path d="M10 14.6c4.418 0 8-4.8 8-4.8S14.418 5 10 5 2 9.8 2 9.8s3.582 4.8 8 4.8z"></path>
      <path d="M10 11.8a2 2 0 100-4 2 2 0 000 4z"></path>
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
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Show;

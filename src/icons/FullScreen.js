import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const FullScreen = props => {
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
      <path d="M12 4h4v4"></path>
      <path d="M8 4H4v4"></path>
      <path d="M12 16h4v-4"></path>
      <path d="M8 16H4v-4"></path>
      <path d="M16 4l-4.333 4.333"></path>
      <path d="M8.333 11.667L4 16"></path>
    </svg>
  );
};

FullScreen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

FullScreen.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default FullScreen;

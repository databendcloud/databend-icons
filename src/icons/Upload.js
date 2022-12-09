import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Upload = props => {
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
      <path d="M4.866 8.446a4.168 4.168 0 102.106 8.063"></path>
      <path d="M15.023 8.446a4.168 4.168 0 11-2.106 8.063"></path>
      <path d="M15 8.333a5 5 0 00-10 0"></path>
      <path d="M7.11 11.617L10 8.718l2.972 2.949"></path>
      <path d="M10 15.833v-5.64"></path>
    </svg>
  );
};

Upload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Upload.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Upload;

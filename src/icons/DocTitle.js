import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const DocTitle = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      class="icon default className"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      class="className"
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M3 4v12.444"></path>
      <path d="M10 4v12.444"></path>
      <path d="M3.389 10.222H9.61"></path>
      <path d="M13.111 10.222v6.222"></path>
      <path d="M13.111 12.954c0-.998.778-1.954 1.945-1.954 1.166 0 1.944.917 1.944 1.954v3.496"></path>
    </svg>
  );
};

DocTitle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

DocTitle.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default DocTitle;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const SortDown = props => {
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
      <path d="M9.583 3.333h8.334"></path>
      <path d="M5.833 17.083L2.5 13.75"></path>
      <path d="M5.833 2.917v14.166"></path>
      <path d="M9.583 7.5h6.667"></path>
      <path d="M9.583 11.667h5"></path>
      <path d="M9.583 15.833h3.334"></path>
    </svg>
  );
};

SortDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

SortDown.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default SortDown;

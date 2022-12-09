import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Filescode = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      class="icon default props.className"
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M14.667 9.333v-3l-3-3.333h-7A.667.667 0 004 3.667v12c0 .368.298.666.667.666h4"></path>
      <path d="M13.667 12l1.666 1.667-1.666 1.666"></path>
      <path d="M11.667 12L10 13.667l1.667 1.666"></path>
      <path d="M11.333 3v3.333h3.334"></path>
    </svg>
  );
};

Filescode.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Filescode.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Filescode;

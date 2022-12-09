import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Column = props => {
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
      <rect x="6" y="3" width="8" height="14"></rect>
      <rect x="6" y="7.5" width="8" height="5"></rect>
    </svg>
  );
};

Column.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Column.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Column;

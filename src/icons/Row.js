import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Row = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      class="icon default"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <rect x="3" y="11" width="14" height="4"></rect>
      <rect x="3" y="5" width="14" height="4"></rect>
    </svg>
  );
};

Row.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Row.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Row;

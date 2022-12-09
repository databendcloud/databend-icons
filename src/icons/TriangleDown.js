import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const TriangleDown = props => {
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
      <path
        d="M10.411 13.353a.5.5 0 01-.822 0L5.348 7.23a.5.5 0 01.41-.785h8.483a.5.5 0 01.412.785l-4.242 6.122z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

TriangleDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

TriangleDown.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default TriangleDown;

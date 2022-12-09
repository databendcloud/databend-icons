import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const TriangleRight = props => {
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
      <path
        d="M13.157 9.785a.5.5 0 010 .822L7.035 14.85a.5.5 0 01-.785-.411V5.955a.5.5 0 01.785-.411l6.122 4.241z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

TriangleRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

TriangleRight.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default TriangleRight;

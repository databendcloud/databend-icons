import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Level = props => {
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
      <path d="M10 16L3.333 8.167 5.232 4h9.536l1.899 4.167L10 16z"></path>
      <path d="M12.667 8L10 11 7.333 8"></path>
    </svg>
  );
};

Level.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Level.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Level;

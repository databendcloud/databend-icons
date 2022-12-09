import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Return = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className="icon default"
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M5.417 3.333L2.5 5.833 5.417 8.75"></path>
      <path d="M2.5 5.833h9.58c2.869 0 5.304 2.342 5.416 5.209.118 3.029-2.385 5.625-5.415 5.625H4.999"></path>
    </svg>
  );
};

Return.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Return.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Return;

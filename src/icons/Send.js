import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Send = props => {
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
      <path d="M17.917 2.083l-5.542 15.834-3.167-7.125-7.125-3.167 15.834-5.542z"></path>
      <path d="M17.917 2.083l-8.709 8.709"></path>
    </svg>
  );
};

Send.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Send.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Send;

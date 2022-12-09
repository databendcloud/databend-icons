import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Mail = props => {
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
      <path d="M3.333 15h13.334V5H3.333v10z"></path>
      <path d="M3.333 5L10 10l6.667-5"></path>
      <path d="M10 5H3.333v5"></path>
      <path d="M16.667 10V5H10"></path>
    </svg>
  );
};

Mail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Mail.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Mail;

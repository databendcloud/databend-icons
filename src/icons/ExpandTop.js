import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ExpandTop = props => {
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
      <path d="M16.25 2.5H3.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V3.75c0-.69-.56-1.25-1.25-1.25z"></path>
      <path d="M2.5 6.667h15"></path>
      <path d="M8.333 13.333L10 11.667l1.667 1.666"></path>
      <path d="M2.5 4.167v5"></path>
      <path d="M17.5 4.167v5"></path>
    </svg>
  );
};

ExpandTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ExpandTop.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default ExpandTop;

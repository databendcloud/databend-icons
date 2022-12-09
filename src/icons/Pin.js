import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Pin = props => {
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
      <path d="M4.457 7.293c1.1-1.099 2.406-1.069 3.826-.29l5.309-2.943-.3-2.065 4.713 4.714-2.061-.296-2.947 5.304c.743 1.516.809 2.727-.29 3.826l-3.242-3.24-6.78 5.012 4.998-6.796-3.226-3.226z"></path>
    </svg>
  );
};

Pin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Pin.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Pin;

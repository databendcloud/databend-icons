import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Check = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.667 10L3.75 7.917l4.167 4.166L16.25 3.75l2.083 2.083L7.917 16.25 1.667 10z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

Check.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Check.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Check;

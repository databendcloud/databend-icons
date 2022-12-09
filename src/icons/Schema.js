import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Schema = props => {
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
      <path d="M5.833 5.417H2.5v9.166h3.333"></path>
      <path d="M5.833 12.083H17.5v5H5.833v-5z"></path>
      <path d="M5.833 2.917H17.5v5H5.833v-5z"></path>
    </svg>
  );
};

Schema.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Schema.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Schema;

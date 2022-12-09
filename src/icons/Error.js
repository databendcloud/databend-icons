import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Error = props => {
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
        d="M2.5 4.583L4.583 2.5 10 7.917 15.417 2.5 17.5 4.583 12.083 10l5.417 5.417-2.083 2.083L10 12.083 4.583 17.5 2.5 15.417 7.917 10 2.5 4.583z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

Error.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Error.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Error;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Download = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 20 20"
      fill={color}
      {...otherProps}
    >
      <path
        clipRule="evenodd"
        d="M10.002 11.474L5.58 7.053h2.947V3h2.947v4.053h2.948l-4.421 4.42z"
      ></path>
      <path d="M16.633 14.421H3.37"></path>
      <path d="M13.686 17H6.317"></path>
    </svg>
  );
};

Download.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Download.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Download;

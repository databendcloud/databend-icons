import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Error = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4.944L4.944 3 10 8.056 15.056 3 17 4.944 11.944 10 17 15.056 15.056 17 10 11.944 4.944 17 3 15.056 8.056 10 3 4.944z"
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

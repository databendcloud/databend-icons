import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Youtube = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.666 5.72C18 6.949 18 9.51 18 9.51s0 2.56-.334 3.789a1.988 1.988 0 01-1.415 1.392c-1.248.328-6.251.328-6.251.328s-5.003 0-6.25-.329A1.988 1.988 0 012.333 13.3C2 12.07 2 9.509 2 9.509s0-2.56.334-3.788A1.988 1.988 0 013.75 4.329C4.997 4 10 4 10 4s5.004 0 6.252.33a1.988 1.988 0 011.415 1.39zM8.4 11.872l4.157-2.361L8.4 7.149v4.722z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

Youtube.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Youtube.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Youtube;

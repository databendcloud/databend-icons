import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Check = props => {
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
        d="M3 9.75L4.75 8l3.5 3.5 7-7L17 6.25 8.25 15 3 9.75z"
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

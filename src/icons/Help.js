import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Help = props => {
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
      <path d="M10 16.5a6.48 6.48 0 004.596-1.904A6.48 6.48 0 0016.5 10a6.48 6.48 0 00-1.904-4.596A6.48 6.48 0 0010 3.5a6.48 6.48 0 00-4.596 1.904A6.48 6.48 0 003.5 10a6.48 6.48 0 001.904 4.596A6.48 6.48 0 0010 16.5z"></path>
      <path d="M10 11.503v-1.3a1.95 1.95 0 10-1.95-1.95"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 14.428a.813.813 0 100-1.625.813.813 0 000 1.625z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

Help.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Help.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Help;

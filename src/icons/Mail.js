import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Mail = props => {
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
      <path d="M3 15.5h14V5H3v10.5z"></path>
      <path d="M3 5l7 5.25L17 5"></path>
      <path d="M10 5H3v5.25"></path>
      <path d="M17 10.25V5h-7"></path>
    </svg>
  );
};

Mail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Mail.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Mail;

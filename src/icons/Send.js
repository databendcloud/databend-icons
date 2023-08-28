import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Send = props => {
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
      <path d="M17 3l-4.9 14-2.8-6.3L3 7.9 17 3z"></path>
      <path d="M17 3l-7.7 7.7"></path>
    </svg>
  );
};

Send.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Send.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Send;

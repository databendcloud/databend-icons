import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Filescode = props => {
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
      <path d="M15.2 9.65V6.5L12.05 3H4.7a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h4.2"></path>
      <path d="M14.15 12.45l1.75 1.75-1.75 1.75"></path>
      <path d="M12.05 12.45L10.3 14.2l1.75 1.75"></path>
      <path d="M11.7 3v3.5h3.5"></path>
    </svg>
  );
};

Filescode.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Filescode.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Filescode;

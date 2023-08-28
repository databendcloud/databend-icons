import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Enter = props => {
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
      <path d="M18.333 18.333V1.667H10v6.666H1.667v10h16.666z"></path>
      <path d="M8.75 11.667l-1.667 1.666L8.75 15"></path>
      <path d="M14.167 9.583v3.75H7.083"></path>
    </svg>
  );
};

Enter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Enter.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Enter;

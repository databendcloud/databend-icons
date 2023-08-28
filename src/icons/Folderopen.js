import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Folderopen = props => {
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
      <path d="M3 4.7v11.2l1.75-7h10.675V6.8a.7.7 0 00-.7-.7H10L8.25 4H3.7a.7.7 0 00-.7.7z"></path>
      <path d="M15.6 15.9l1.4-7H4.684L3 15.9h12.6z"></path>
    </svg>
  );
};

Folderopen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Folderopen.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Folderopen;

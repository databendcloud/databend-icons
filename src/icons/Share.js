import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Share = props => {
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
      <path d="M14.5 6.889A1.944 1.944 0 1014.5 3a1.944 1.944 0 000 3.889z"></path>
      <path d="M5.944 11.944a1.944 1.944 0 100-3.888 1.944 1.944 0 000 3.888z"></path>
      <path d="M12.556 5.946L7.631 8.929"></path>
      <path d="M7.632 10.997l5.188 3.066"></path>
      <path d="M14.5 13.111a1.944 1.944 0 110 3.889 1.944 1.944 0 010-3.889z"></path>
    </svg>
  );
};

Share.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Share.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Share;

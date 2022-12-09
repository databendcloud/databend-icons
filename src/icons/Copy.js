import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Copy = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default')}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M5.417 5.18V3.255c0-.647.524-1.172 1.172-1.172h10.156c.647 0 1.172.525 1.172 1.172v10.156c0 .648-.525 1.172-1.172 1.172h-1.947"></path>
      <path d="M13.412 5.417H3.255c-.647 0-1.172.524-1.172 1.172v10.156c0 .647.525 1.172 1.172 1.172h10.157c.647 0 1.171-.525 1.171-1.172V6.589c0-.648-.524-1.172-1.171-1.172z"></path>
    </svg>
  );
};

Copy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Copy.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Copy;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Hidden = props => {
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
      <path d="M2.5 6.667c.264.508.665.979 1.176 1.398C5.11 9.239 7.408 10 10 10c2.592 0 4.891-.761 6.324-1.935.51-.419.911-.89 1.176-1.398"></path>
      <path d="M12.074 10l.863 3.22"></path>
      <path d="M15.564 8.897l2.357 2.357"></path>
      <path d="M2.083 11.254L4.44 8.897"></path>
      <path d="M7.053 13.22L7.916 10"></path>
    </svg>
  );
};

Hidden.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Hidden.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Hidden;

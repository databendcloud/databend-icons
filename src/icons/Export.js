import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Export = props => {
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
      <path d="M17.5 11.25c0 2.5-1.667 6.667-7.5 6.667S2.5 13.75 2.5 11.25"></path>
      <path d="M10.003 2.125V13.75"></path>
      <path d="M5 7.083l5-5 5 5"></path>
    </svg>
  );
};

Export.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Export.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Export;

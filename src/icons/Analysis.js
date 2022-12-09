import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Analysis = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', props?.className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M18.333 4.583c0-.69-.56-1.25-1.25-1.25H2.917c-.69 0-1.25.56-1.25 1.25v3.75h16.666v-3.75z"></path>
      <path d="M1.713 16.262l5.074-5.125 2.741 2.625 3.351-2.929 1.867 1.82"></path>
      <path d="M18.333 7.5v7.917c0 .69-.56 1.25-1.25 1.25H5"></path>
      <path d="M7.963 5.833h7.5"></path>
      <path d="M4.63 5.833h.833"></path>
      <path d="M1.667 7.5v3.75"></path>
    </svg>
  );
};

Analysis.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Analysis.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Analysis;

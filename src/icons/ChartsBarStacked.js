import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ChartsBarStacked = props => {
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
      <path d="M11 13H9v2h2v-2z"></path>
      <path d="M11 7H9v6h2V7z"></path>
      <path d="M7 9H5v4h2V9z"></path>
      <path d="M7 13H5v2h2v-2z"></path>
      <path d="M15 13h-2v2h2v-2z"></path>
      <path d="M15 5h-2v8h2V5z"></path>
    </svg>
  );
};

ChartsBarStacked.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ChartsBarStacked.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default ChartsBarStacked;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Label = props => {
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
      <path d="M5 3.333h10v13.334l-5-3.524-5 3.524V3.333z"></path>
      <path d="M15 3.333H5v4h10v-4z"></path>
    </svg>
  );
};

Label.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Label.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Label;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Close = props => {
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
      <path d="M5 5l10 10"></path>
      <path d="M5 15L15 5"></path>
    </svg>
  );
};

Close.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Close.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Close;

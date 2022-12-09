import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Down = props => {
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
      <path d="M15 8l-5 5-5-5"></path>
    </svg>
  );
};

Down.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Down.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Down;

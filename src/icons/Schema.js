import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Schema = props => {
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
      <path d="M6.111 5.723H3v8.556h3.111"></path>
      <path d="M6.111 11.946H17v4.666H6.111v-4.666z"></path>
      <path d="M6.111 3.39H17v4.667H6.111V3.39z"></path>
    </svg>
  );
};

Schema.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Schema.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Schema;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Delete = props => {
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
      <path d="M6.5 5.722L6.967 3h6.066l.467 2.722"></path>
      <path d="M3 5.722h14"></path>
      <path
        clipRule="evenodd"
        d="M15.056 5.722l-.778 12.056H5.722L4.944 5.722h10.111z"
      ></path>
      <path d="M8.056 14.667h3.889"></path>
    </svg>
  );
};

Delete.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Delete.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Delete;

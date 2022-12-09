import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Delete = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      class="icon default"
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M6.25 5l.5-2.917h6.5L13.75 5"></path>
      <path d="M2.5 5h15"></path>
      <path
        clipRule="evenodd"
        d="M15.417 5l-.834 12.917H5.417L4.583 5h10.834z"
      ></path>
      <path d="M7.917 14.583h4.166"></path>
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

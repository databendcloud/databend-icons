import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Book = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      class="icon default className"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      class="className"
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M3.333 16.667v-12.5c0-1.381 1.194-2.5 2.667-2.5h10.667V15H6c-2.099 0-2.667.285-2.667 1.667z"></path>
      <path
        clipRule="evenodd"
        d="M5 18.333h11.667V15H5a1.667 1.667 0 000 3.333z"
      ></path>
    </svg>
  );
};

Book.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Book.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Book;

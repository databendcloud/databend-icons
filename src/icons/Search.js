import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Search = props => {
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
      <path d="M8.75 15.833a7.083 7.083 0 100-14.166 7.083 7.083 0 000 14.166z"></path>
      <path d="M11.107 5.976A3.323 3.323 0 008.75 5c-.92 0-1.754.373-2.357.976"></path>
      <path d="M13.842 13.842l3.536 3.536"></path>
    </svg>
  );
};

Search.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Search.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Search;

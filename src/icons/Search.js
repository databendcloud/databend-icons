import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Search = props => {
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
      <path d="M9.312 15.624A6.312 6.312 0 109.312 3a6.312 6.312 0 000 12.624z"></path>
      <path d="M11.412 6.84a2.961 2.961 0 00-2.1-.87c-.82 0-1.563.333-2.1.87"></path>
      <path d="M13.85 13.85L17 17"></path>
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

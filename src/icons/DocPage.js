import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const DocPage = props => {
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
      <path d="M5 3.7a.7.7 0 01.7-.7h8.4a.7.7 0 01.7.7V17l-2.45-1.75L9.9 17l-2.45-1.75L5 17V3.7z"></path>
      <path d="M7.8 9.3H12"></path>
      <path d="M7.8 12.1H12"></path>
      <path d="M7.8 6.5H12"></path>
    </svg>
  );
};

DocPage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

DocPage.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default DocPage;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const DocParagraph = props => {
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
      <path d="M10 5h6"></path>
      <path d="M10 8.333h6"></path>
      <path d="M4 11.667h12"></path>
      <path d="M4 15h12"></path>
      <path d="M6.596 7.417H4.738l.929-1.858.929 1.858z"></path>
      <path d="M4 8.333l.333-.666m3 .666L7 7.667m-2.667 0L5.667 5 7 7.667m-2.667 0H7"></path>
    </svg>
  );
};

DocParagraph.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

DocParagraph.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default DocParagraph;

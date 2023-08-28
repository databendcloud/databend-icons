import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Rmb = props => {
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
      <path
        d="M11.688 9.092h1.368v1.164l-1.98.024-.42.804v.108h2.4v1.164h-2.4V14h-1.68v-1.644h-2.4v-1.164h2.4v-.108l-.42-.816-1.98-.012V9.092h1.368L6.132 5.624h1.896l1.788 3.912 1.776-3.912h1.896l-1.8 3.468z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

Rmb.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Rmb.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Rmb;

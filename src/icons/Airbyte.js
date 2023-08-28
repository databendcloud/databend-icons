import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Airbyte = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.276 3.941c1.712-1.923 4.546-2.487 6.877-1.377 3.096 1.475 4.225 5.232 2.54 8.13L12.9 17.209a1.608 1.608 0 01-2.181.58l4.59-7.886a4.202 4.202 0 00-1.84-5.904c-1.683-.806-3.742-.403-4.986.982a4.202 4.202 0 00.316 5.946L6.12 15.54a1.588 1.588 0 01-.97.738 1.606 1.606 0 01-1.211-.158l2.91-5.007a5.751 5.751 0 01-.885-1.98L4.18 12.208a1.607 1.607 0 01-2.181.58l4.61-7.93c.193-.326.416-.632.666-.916zm5.322 2.525a2.303 2.303 0 01.851 3.155l-4.421 7.586a1.608 1.608 0 01-2.181.58l4.105-7.062a2.333 2.333 0 01-1.564-1.156 2.298 2.298 0 01.42-2.76 2.329 2.329 0 011.84-.645c.334.031.659.134.95.302zM10.99 7.89a.721.721 0 00.21 1.26.734.734 0 00.782-.207.723.723 0 00-.453-1.196.735.735 0 00-.54.143z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

Airbyte.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Airbyte.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Airbyte;

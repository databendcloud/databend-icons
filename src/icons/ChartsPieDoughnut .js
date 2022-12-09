import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ChartsPieDoughnut = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        d="M16.667 10h.5a.5.5 0 00-.5-.5v.5zM14 10v-.5a.5.5 0 00-.5.5h.5zm-4-4v.5a.5.5 0 00.5-.5H10zm0-2.667h.5a.5.5 0 00-.5-.5v.5zM16.167 10A6.167 6.167 0 0110 16.167v1A7.167 7.167 0 0017.167 10h-1zM14 10.5h2.667v-1H14v1zm-.5-.5a3.5 3.5 0 01-3.5 3.5v1a4.5 4.5 0 004.5-4.5h-1zM10 13.5A3.5 3.5 0 016.5 10h-1a4.5 4.5 0 004.5 4.5v-1zM6.5 10A3.5 3.5 0 0110 6.5v-1A4.5 4.5 0 005.5 10h1zm3-6.667V6h1V3.333h-1zM3.833 10A6.167 6.167 0 0110 3.833v-1A7.167 7.167 0 002.833 10h1zM10 16.167A6.167 6.167 0 013.833 10h-1A7.167 7.167 0 0010 17.167v-1z"
        fillOpacity=".8"
      ></path>
      <path
        d="M16.361 8v.5a.5.5 0 00.477-.65l-.477.15zm-2.896 0l-.433.25a.5.5 0 00.433.25V8zM12 3.639l.15-.478a.5.5 0 00-.65.478h.5zm0 2.896h-.5a.5.5 0 00.25.433l.25-.433zm4.361.965h-2.896v1h2.896v-1zm-4.51-3.384a6.182 6.182 0 014.033 4.034l.954-.3a7.182 7.182 0 00-4.688-4.689l-.3.955zm.649 2.42V3.638h-1v2.896h1zm-.75.432c.531.307.975.75 1.282 1.282l.866-.5a4.52 4.52 0 00-1.648-1.648l-.5.866z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

ChartsPieDoughnut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

ChartsPieDoughnut.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ChartsPieDoughnut;

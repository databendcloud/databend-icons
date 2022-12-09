import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const DataNum = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      class="icon default"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        d="M2.5 8.636V7.158h2.826v6.786H3.51V8.636H2.5z"
        fillOpacity=".8"
      ></path>
      <path
        d="M6.458 12.67a37.017 37.017 0 001.887-1.469 6.06 6.06 0 00.98-1.012c.265-.354.398-.698.398-1.032 0-.254-.065-.453-.194-.595-.13-.143-.323-.214-.581-.214a.754.754 0 00-.613.27c-.142.173-.214.421-.214.743H6.438c.013-.527.136-.967.367-1.32.238-.353.548-.613.929-.78a3.21 3.21 0 011.285-.252c.81 0 1.418.19 1.826.567.415.378.622.871.622 1.478 0 .664-.248 1.28-.744 1.85-.497.564-1.13 1.116-1.898 1.655h2.755v1.292H6.458v-1.18z"
        fillOpacity=".8"
      ></path>
      <path
        d="M12.41 9.073c.026-.663.264-1.174.713-1.534.45-.36 1.058-.539 1.826-.539.51 0 .946.08 1.306.242.368.16.643.38.827.66.19.279.285.592.285.939 0 .409-.112.743-.336 1.004a1.718 1.718 0 01-.786.52v.037c.388.118.694.313.918.586.225.273.337.623.337 1.05 0 .385-.099.726-.296 1.023-.19.291-.473.52-.847.688-.367.167-.806.251-1.316.251-.816 0-1.469-.183-1.959-.549-.482-.365-.738-.917-.765-1.654h1.694c.007.272.092.49.255.65.163.155.401.233.714.233.265 0 .47-.068.612-.205a.735.735 0 00.225-.557c0-.298-.106-.512-.317-.642-.204-.136-.534-.204-.99-.204h-.326V9.78h.327c.347 0 .626-.053.836-.158.218-.112.327-.307.327-.586 0-.223-.068-.397-.204-.52-.136-.125-.323-.187-.561-.187-.259 0-.453.072-.582.214a.928.928 0 00-.214.53h-1.704z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

DataNum.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

DataNum.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default DataNum;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Ag = props => {
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
        d="M7.914 10.916H4.977l-.47 1.27H2.5L5.347 5h2.22l2.846 7.185H8.384l-.47-1.269zM7.42 9.565l-.975-2.63-.964 2.63h1.94z"
        fillOpacity=".8"
      ></path>
      <path
        d="M13.656 6.392c.44 0 .825.082 1.154.246.336.163.594.378.773.644v-.808H17.5v5.701c0 .525-.116 1-.348 1.423-.224.43-.571.77-1.042 1.023-.463.253-1.042.379-1.737.379-.927 0-1.678-.201-2.253-.604-.575-.396-.904-.935-.986-1.617h1.894c.06.218.202.389.426.512.224.13.5.194.83.194.395 0 .71-.106.94-.317.24-.205.36-.536.36-.993v-.809a2.108 2.108 0 01-.774.655c-.329.164-.714.246-1.154.246-.516 0-.983-.12-1.401-.358a2.683 2.683 0 01-.998-1.034c-.24-.45-.359-.969-.359-1.556 0-.586.12-1.102.359-1.545a2.61 2.61 0 01.998-1.024 2.776 2.776 0 011.4-.358zm1.927 2.938c0-.437-.134-.782-.403-1.034a1.335 1.335 0 00-.964-.379c-.381 0-.706.126-.975.379-.262.245-.392.587-.392 1.023 0 .437.13.785.392 1.044.269.253.594.38.975.38s.702-.127.964-.38c.269-.252.403-.597.403-1.033z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

Ag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Ag.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Ag;

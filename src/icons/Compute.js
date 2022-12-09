import React from 'react';
// import { FC } from 'react';
import clsx from 'clsx';
/*interface IProps{
    style?: React.CSSProperties;
    className?: string | 'g-icon-defaut-primary';
    onClick?: React.MouseEventHandler<HTMLElement>;
    children?: React.ReactNode[] | React.ReactNode;
    color: string;
    size: string | number;
  }*/
function ComputeIcon(props) {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      {...otherProps}
    >
      <path d="M18.333 1.667H1.667v6.666h16.666V1.667z"></path>
      <path d="M18.333 11.667H1.667v6.666h16.666v-6.666z"></path>
      <path d="M4.667 5.333v-.666h.666v.666h-.666z"></path>
      <path d="M4.667 15.333v-.666h.666v.666h-.666z"></path>
      <path d="M8 5.333v-.666h.667v.666H8z"></path>
      <path d="M8 15.333v-.666h.667v.666H8z"></path>
    </svg>
  );
}

ComputeIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ComputeIcon;

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
function TerminalIcon(props) {
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
      <path d="M16 4.667H4a.667.667 0 00-.667.666v9.334c0 .368.299.666.667.666h12a.667.667 0 00.667-.666V5.333A.667.667 0 0016 4.667z"></path>
      <path d="M6 8l2.333 2L6 12"></path>
      <path d="M9.667 12.667H14"></path>
    </svg>
  );
}

TerminalIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default TerminalIcon;
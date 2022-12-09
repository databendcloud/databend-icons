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
function LockedIcon(props) {
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
      <path d="M15.9 9.3H4.7a.7.7 0 00-.7.7v6.3a.7.7 0 00.7.7h11.2a.7.7 0 00.7-.7V10a.7.7 0 00-.7-.7z"></path>
      <path d="M6.8 9.3V6.5a3.5 3.5 0 017 0v2.8"></path>
      <path d="M10.3 12.1v2.1"></path>
    </svg>
  );
}

LockedIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default LockedIcon;

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
function DocPageIcon(props) {
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
      <path d="M5 3.7a.7.7 0 01.7-.7h8.4a.7.7 0 01.7.7V17l-2.45-1.75L9.9 17l-2.45-1.75L5 17V3.7z"></path>
      <path d="M7.8 9.3H12"></path>
      <path d="M7.8 12.1H12"></path>
      <path d="M7.8 6.5H12"></path>
    </svg>
  );
}

DocPageIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default DocPageIcon;

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
function RecentIcon(props) {
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
      <path d="M7.667 9.646V5a2 2 0 114 0v.669"></path>
      <path d="M11.667 9.668v4.665a2 2 0 01-4 0v-.676"></path>
      <path d="M9.667 11.667H4.995a1.997 1.997 0 01-1.995-2c0-1.105.893-2 1.995-2h.668"></path>
      <path d="M9.667 7.667h4.663c1.106 0 2.003.895 2.003 2 0 1.104-.897 2-2.003 2h-.641"></path>
    </svg>
  );
}

RecentIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default RecentIcon;

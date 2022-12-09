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
function MarkdownIcon(props) {
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
      <path
        d="M16.846 14.846H3.154A1.155 1.155 0 012 13.692V6.154C2 5.518 2.518 5 3.154 5h13.692C17.483 5 18 5.518 18 6.154v7.538c0 .637-.517 1.154-1.154 1.154zm-11-2.307v-3l1.539 1.923 1.538-1.923v3h1.539V7.308H8.923L7.385 9.23 5.846 7.308H4.308v5.23h1.538zm10.308-2.616h-1.539V7.308h-1.538v2.615h-1.539l2.308 2.692 2.308-2.692z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
}

MarkdownIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default MarkdownIcon;
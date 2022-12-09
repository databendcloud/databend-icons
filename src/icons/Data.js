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
function DataIcon(props) {
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
      <path d="M18.333 4.583v11.25c0 1.381-3.73 2.5-8.333 2.5-4.602 0-8.333-1.119-8.333-2.5V4.583"></path>
      <path d="M18.333 12.083c0 1.381-3.73 2.5-8.333 2.5-4.602 0-8.333-1.119-8.333-2.5"></path>
      <path d="M18.333 8.333c0 1.381-3.73 2.5-8.333 2.5-4.602 0-8.333-1.119-8.333-2.5"></path>
      <path d="M10 6.667c4.602 0 8.333-1.12 8.333-2.5 0-1.381-3.73-2.5-8.333-2.5-4.602 0-8.333 1.119-8.333 2.5 0 1.38 3.73 2.5 8.333 2.5z"></path>
    </svg>
  );
}

DataIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default DataIcon;

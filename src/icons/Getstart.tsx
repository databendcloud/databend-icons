import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps {
  style?: React.CSSProperties;
  className?: string | 'g-icon-defaut-primary';
  onClick?: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode[] | React.ReactNode;
  color: string;
  size: string | number;
}
const GetstartIcon: FC<IProps | any> = props => {
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
      <path d="M14.333 15.667l1.13-3.109a.667.667 0 00-.328-.824L9.965 9.15a.667.667 0 00-.596 0l-5.17 2.585a.667.667 0 00-.33.824L5 15.667"></path>
      <path d="M13.333 6.333H6A.667.667 0 005.333 7v4l4.054-1.871a.667.667 0 01.559 0L14 11V7a.667.667 0 00-.667-.667z"></path>
      <path d="M11.333 6.333V3.667A.667.667 0 0010.667 3h-2A.667.667 0 008 3.667v2.666"></path>
      <path d="M9.667 12.333V15"></path>
      <path d="M3 16.333c1.333 0 1.333-.666 2.333-.666 1 0 1 .666 2 .666s1.167-.666 2.334-.666c1.166 0 1.333.666 2.333.666 1 0 1-.666 2-.666s1 .666 2.333.666"></path>
    </svg>
  );
};

GetstartIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default GetstartIcon;

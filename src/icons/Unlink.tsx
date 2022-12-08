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
const UnlinkIcon: FC<IProps | any> = props => {
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
      <path d="M10.789 6.68L7.548 3.438c-1.194-1.194-3.088-1.234-4.232-.09-1.145 1.145-1.105 3.04.089 4.233l3.24 3.24"></path>
      <path d="M13.298 9.196l3.241 3.241c1.194 1.193 1.348 3.031.09 4.232-1.26 1.201-3.04 1.104-4.233-.089l-3.24-3.24"></path>
      <path d="M8.85 8.782l-1.621-1.62"></path>
      <path d="M12.63 12.563l-1.62-1.62"></path>
    </svg>
  );
};

UnlinkIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default UnlinkIcon;

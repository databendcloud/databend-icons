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
const NotificationsIcon: FC<IProps | any> = props => {
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
      <path d="M18.333 10A8.333 8.333 0 0110 18.333H1.667V10a8.333 8.333 0 1116.666 0z"></path>
      <path d="M5.833 7.5h7.5"></path>
      <path d="M5.833 10.833h7.5"></path>
      <path d="M5.833 14.167H10"></path>
    </svg>
  );
};

NotificationsIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default NotificationsIcon;

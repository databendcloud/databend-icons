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
const SortUpIcon: FC<IProps | any> = props => {
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
      <path d="M9.583 3.75h8.334"></path>
      <path d="M2.083 6.667l3.334-3.334"></path>
      <path d="M5.417 3.333V17.5"></path>
      <path d="M9.583 7.917h6.667"></path>
      <path d="M9.583 12.083h5"></path>
      <path d="M9.583 16.25h3.334"></path>
    </svg>
  );
};

SortUpIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default SortUpIcon;

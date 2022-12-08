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
const RefreshIcon: FC<IProps | any> = props => {
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
      <path d="M17.5 3.333V10"></path>
      <path d="M2.5 10v6.667"></path>
      <path d="M2.5 10a7.5 7.5 0 0012.708 5.397"></path>
      <path d="M17.5 10A7.5 7.5 0 004.604 4.792"></path>
    </svg>
  );
};

RefreshIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default RefreshIcon;

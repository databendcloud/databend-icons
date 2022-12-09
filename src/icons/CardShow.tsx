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
const CardShowIcon: FC<IProps | any> = props => {
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
      <path d="M16.25 2.5H3.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V3.75c0-.69-.56-1.25-1.25-1.25z"></path>
      <path d="M8.75 5.417H5.417V8.75H8.75V5.417z"></path>
      <path d="M14.583 5.417H11.25V8.75h3.333V5.417z"></path>
      <path d="M8.75 11.25H5.417v3.333H8.75V11.25z"></path>
      <path d="M14.583 11.25H11.25v3.333h3.333V11.25z"></path>
    </svg>
  );
};

CardShowIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default CardShowIcon;

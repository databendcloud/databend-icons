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
const TableIcon: FC<IProps | any> = props => {
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
      <path d="M16.375 2.5H3.625c-.621 0-1.125.504-1.125 1.125v12.75c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V3.625c0-.621-.504-1.125-1.125-1.125z"></path>
      <path d="M7.5 2.5v15"></path>
      <path d="M12.5 2.5v15"></path>
      <path d="M2.5 7.5h15"></path>
      <path d="M2.5 12.5h15"></path>
    </svg>
  );
};

TableIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default TableIcon;

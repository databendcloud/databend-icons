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
const ExpandDownIcon: FC<IProps | any> = props => {
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
      <path d="M2.5 4.167c0-.92.746-1.667 1.667-1.667h11.666c.92 0 1.667.746 1.667 1.667v11.666c0 .92-.746 1.667-1.667 1.667H4.167c-.92 0-1.667-.746-1.667-1.667V4.167z"></path>
      <path d="M2.5 13.333h15"></path>
      <path d="M8.333 6.667L10 8.333l1.667-1.666"></path>
      <path d="M2.5 10.833v5"></path>
      <path d="M17.5 10.833v5"></path>
    </svg>
  );
};

ExpandDownIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ExpandDownIcon;

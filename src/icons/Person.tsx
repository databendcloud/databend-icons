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
const PersonIcon: FC<IProps | any> = props => {
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
      <path d="M10 8.667a2.667 2.667 0 100-5.334 2.667 2.667 0 000 5.334z"></path>
      <path d="M16 16.667a6 6 0 00-12 0"></path>
    </svg>
  );
};

PersonIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default PersonIcon;
